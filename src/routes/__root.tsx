import * as stylex from "@stylexjs/stylex";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { tokens } from "../tokens.stylex";
import { SearchBar } from "./-components/SearchBar";
import { TanStackRouterDevtools } from "./-utils/TanStackRouterDevtools";

const styles = stylex.create({
  root: {
    fontFamily: "'Open Sans', sans-serif",
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: "'wdth' 100",

    color: tokens.onSurface,
    backgroundColor: tokens.surface,

    height: "100vh",
    width: "100vw",
  },

  container: { padding: "0.5em 1em" },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
        <Outlet />
      </div>

      <Suspense>
        <TanStackRouterDevtools initialIsOpen={false} />
      </Suspense>
    </div>
  );
}
