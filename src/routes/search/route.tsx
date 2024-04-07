import { Link, createFileRoute } from "@tanstack/react-router";
import { ResultItem } from "./-components/ResultItem";
import { resultSchema, type Result } from "./-types/result";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";
import { api } from "../-utils/api";

const searchSchema = z.object({
  results: z.array(resultSchema),
});

const searchOptions = ({ query, page }: { query: string; page: number }) =>
  queryOptions({
    queryKey: ["search"],
    async queryFn() {
      const response = await api.get("search/movies", {
        params: { query, page: String(page) },
      });
      return searchSchema.parse(response.data);
    },
  });

export const Route = createFileRoute("/search")({
  component: Search,
  validateSearch: (
    search: Record<string, unknown>,
  ): { query: string; page: number } => ({
    query: (search.query as string) || "",
    page: Number(search.page ?? 1),
  }),
  loaderDeps: ({ search: { query, page } }) => ({ query, page }),
  loader: ({ deps, context: { queryClient } }) =>
    queryClient.ensureQueryData(searchOptions(deps)),
});

function Search() {
  const deps = Route.useLoaderDeps();
  const searchQuery = useSuspenseQuery(searchOptions(deps));
  const { page } = Route.useSearch();
  const results: Result[] = searchQuery.data.results;
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
