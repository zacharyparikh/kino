import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { SearchBar } from "./-components/SearchBar";
import { TanStackRouterDevtools } from "./-utils/TanStackRouterDevtools";

export const Route = createRootRoute({ component: Root });

function Root() {
  return (
    <div className="bg-surface dark:bg-surface-dark text-on-surface dark:text-on-surface-dark min-h-screen w-screen">
      <div className="h-auto flex-grow flex-col p-4">
        <div className="grid grid-flow-col grid-cols-4">
          <h1 className="text-3xl font-bold">Kino</h1>
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
