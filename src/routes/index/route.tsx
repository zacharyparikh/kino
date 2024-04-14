import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { watchlistQueryOptions } from "../-queryOptions/watchlist";
import { Movie } from "./-components/Movie";

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(watchlistQueryOptions),
});

function Index() {
  const watchlistQuery = useSuspenseQuery(watchlistQueryOptions);
  const movieIds = Array.from(watchlistQuery.data.keys());

  return (
    <main>
      <h1>Your Watchlist</h1>
      <ul>
        {movieIds.map((id) => (
          <Movie key={id} id={id} />
        ))}
      </ul>
    </main>
  );
}
