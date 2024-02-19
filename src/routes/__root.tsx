import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as stylex from "@stylexjs/stylex";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { tokens } from "../tokens.stylex";
import { SearchBar } from "./-components/SearchBar";
import { TanStackRouterDevtools } from "./-utils/TanStackRouterDevtools";

const styles = stylex.create({
  root: {
    fontFamily: "Roboto",

    color: tokens.onSurface,
    backgroundColor: tokens.surface,

    minHeight: "100vh",
    width: "100vw",

    display: "flex",
    flexDirection: "column",
  },

  container: {
    padding: "0.5em 1em 1em",
    minHeight: "auto",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },

  outlet: {
    flexGrow: 1,
    display: "grid",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 5em",
  },
  links: { display: "flex", padding: "0.5em", gap: "1em" },
  activeLink: { fontWeight: 700 },
});

export const Route = createRootRoute({ component: Root });

function Root() {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.header)}>
          <h1>Kino</h1>

          <SearchBar />

          <div {...stylex.props(styles.links)}>
            <Link to="/" activeProps={{ ...stylex.props(styles.activeLink) }}>
              Home
            </Link>

            <Link
              to="/watchlist"
              activeProps={{ ...stylex.props(styles.activeLink) }}
            >
              Watchlist
            </Link>
          </div>
        </div>

        <div {...stylex.props(styles.outlet)}>
          <Outlet />
        </div>
      </div>

      <Suspense>
        <TanStackRouterDevtools initialIsOpen={false} />
      </Suspense>
    </div>
  );
}
