import { createFileRoute } from "@tanstack/react-router";
import { fetchSearch } from "./-loaders/fetchSearch";

export const Route = createFileRoute("/search")({
  component: Search,
  validateSearch: (search: Record<string, unknown>): { query: string } => ({
    query: (search.query as string) || "",
  }),
  loaderDeps: ({ search: { query } }) => ({ query }),
  loader: ({ deps: { query } }) => fetchSearch(query),
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

function Search() {
  const searchData = Route.useLoaderData();
  const results: Result[] = searchData?.results ?? [];
  results.sort((a, b) => b.popularity - a.popularity);

  console.log({ results });

  return (
    <div>
      <ul>
        {results.map(({ id, title, release_date }) => {
          return (
            <li key={id}>
              {title} {release_date && `(${getReleaseYear(release_date)})`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
