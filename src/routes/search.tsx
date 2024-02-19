import * as stylex from "@stylexjs/stylex";
import { Link, createFileRoute } from "@tanstack/react-router";
import { fetchSearch } from "./-loaders/fetchSearch";

export const Route = createFileRoute("/search")({
  component: Search,
  validateSearch: (
    search: Record<string, unknown>,
  ): { query: string; page: number } => ({
    query: (search.query as string) || "",
    page: Number(search?.page ?? 1),
  }),
  loaderDeps: ({ search: { query, page } }) => ({ query, page }),
  loader: ({ deps: { query, page } }) => fetchSearch(query, page),
});

type Result = {
  id: number;
  media_type: "movie" | "person";
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
};

const getReleaseYear = (releaseDate: string) => releaseDate.split("-")[0];

const styles = stylex.create({
  links: { display: "flex", gap: "1em" },
});

function Search() {
  const searchData = Route.useLoaderData();
  const { page } = Route.useSearch();
  const results: Result[] = searchData?.results ?? [];
  results.sort((a, b) => b.popularity - a.popularity);

  return (
    <div>
      <ul>
        {results.map(({ id, title, release_date: releaseDate }) => {
          return (
            <li key={id}>
              {title} {releaseDate && `(${getReleaseYear(releaseDate)})`}
            </li>
          );
        })}
      </ul>

      <div {...stylex.props(styles.links)}>
        <Link
          disabled={page === 1}
          from={Route.fullPath}
          search={(prev) => ({
            ...prev,
            page: prev.page - 1,
          })}
        >
          Previous
        </Link>

        <Link
          from={Route.fullPath}
          search={(prev) => ({
            ...prev,
            page: prev.page + 1,
          })}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
