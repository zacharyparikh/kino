import * as stylex from "@stylexjs/stylex";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

const styles = stylex.create({
  links: {
    display: "flex",
    padding: "0.5em",
    gap: "0.5em",
  },

  activeLink: {
    fontWeight: 700,
  },
});

export const Route = createRootRoute({
  component: () => (
    <>
      <div {...stylex.props(styles.links)}>
        <Link to="/" activeProps={{ ...stylex.props(styles.activeLink) }}>
          Home
        </Link>{" "}
        <Link to="/about" activeProps={{ ...stylex.props(styles.activeLink) }}>
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools initialIsOpen={false} />
      </Suspense>
    </>
  ),
});
