import { Link, createFileRoute } from "@tanstack/react-router";
import { fetchSearch } from "./-loaders/fetchSearch";
import { ResultItem } from "./-components/ResultItem";
import type { Result } from "./-types/result";

export const Route = createFileRoute("/search")({
  component: Search,
  validateSearch: (
    search: Record<string, unknown>,
  ): { query: string; page: number } => ({
    query: (search.query as string) || "",
    page: Number(search.page ?? 1),
  }),
  loaderDeps: ({ search: { query, page } }) => ({ query, page }),
  loader: ({ deps: { query, page } }) => fetchSearch(query, page),
});

function Search() {
  const searchData = Route.useLoaderData();
  const { page } = Route.useSearch();
  const results: Result[] = searchData?.results ?? [];
  results.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="grid place-items-center">
      <ol>
        {results.map((r) => (
          <ResultItem key={r.id} {...r} />
        ))}
      </ol>

      <div className="flex gap-4">
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
