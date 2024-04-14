import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { Suspense } from "react";
import { SearchBar } from "./-components/SearchBar";
import { TanStackRouterDevtools } from "./-utils/TanStackRouterDevtools";
import { QueryClient } from "@tanstack/react-query";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
});

function Root() {
  return (
    <div className="min-h-screen w-screen bg-surface text-on-surface dark:bg-surface-dark dark:text-on-surface-dark">
      <div className="h-auto flex-grow flex-col p-4">
        <div className="grid grid-flow-col grid-cols-4 justify-items-start">
          <Link className="text-3xl font-bold" to="/">
            Kino
          </Link>
          <SearchBar />
        </div>

        <div className="grid flex-grow">
          <Outlet />
        </div>
      </div>

      <Suspense>
        <TanStackRouterDevtools initialIsOpen={false} />
      </Suspense>
    </div>
  );
}
