import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/watchlist/$movieId")({
  component: WatchlistMovie,
});

function WatchlistMovie() {}
