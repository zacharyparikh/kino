import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../-utils/api";
import { z } from "zod";

const watchlistSchema = z.array(z.string());

const watchlistQueryOptions = queryOptions({
  queryKey: ["watchlist"],

  async queryFn() {
    const response = await api.get("watchlist");
    return watchlistSchema.parse(response.data);
  },
});

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(watchlistQueryOptions),
});

function Index() {
  const watchlistQuery = useSuspenseQuery(watchlistQueryOptions);

  return (
    <main>
      <h1>Your Watchlist</h1>
      <ul>
        {watchlistQuery.data.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </main>
  );
}
