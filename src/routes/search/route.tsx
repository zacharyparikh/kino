import { Link, createFileRoute } from "@tanstack/react-router";
import { MovieItem } from "../-components/MovieItem";
import { movieSchema, type Movie } from "./-types/movie";
import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { z } from "zod";
import { api } from "../-utils/api";
import { watchlistQueryOptions } from "../-queryOptions/watchlist";

const searchSchema = z.object({
  results: z.array(movieSchema),
});

const searchOptions = ({ query, page }: { query: string; page: number }) =>
  queryOptions({
    queryKey: ["search", query, page],
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
  const watchlistQuery = useQuery(watchlistQueryOptions);
  const { page } = Route.useSearch();
  const results: Movie[] = searchQuery.data.results;
  results.sort((a, b) => b.popularity - a.popularity);

  const isInWatchlist = (movieId: number) =>
    watchlistQuery.data?.has(String(movieId));

  return (
    <div className="grid place-items-center">
      <ol className="max-w-[1000px]">
        {results.map((r) => (
          <MovieItem key={r.id} movie={r} inWatchlist={isInWatchlist(r.id)} />
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
