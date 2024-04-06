import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
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
