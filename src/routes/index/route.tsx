import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../-utils/api";
import { z } from "zod";

const watchlistSchema = z.array(z.string());

async function fetchWatchlist() {
  const response = await api.get("watchlist");
  return watchlistSchema.parse(response.data);
}

const watchlistQueryOptions = queryOptions({
  queryKey: ["watchlist"],
  queryFn: fetchWatchlist,
});

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(watchlistQueryOptions),
});

function Index() {
  return (
    <main>
      <h1>Your Watchlist</h1>
      <ul>
        <li>Portrait of a Lady on Fire</li>
      </ul>
    </main>
  );
}
