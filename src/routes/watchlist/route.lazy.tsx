import * as stylex from "@stylexjs/stylex";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/watchlist")({
  component: Watchlist,
});

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  },
});

function Watchlist() {
  const watchlistData = Route.useLoaderData();
  return <div {...stylex.props(styles.root)}></div>;
}
