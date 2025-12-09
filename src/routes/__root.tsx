/// <reference types="vite/client" />
import * as React from "react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { DefaultCatchBoundary } from "../components/DefaultCatchBoundary.js";
import { NotFound } from "../components/NotFound.js";
import css from "../app.css?url";
import { setTimeout } from "node:timers/promises";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [{ rel: "stylesheet", href: css }],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
  shellComponent: RootDocument,

  // remove async loader to fix bug
  async loader() {
    await setTimeout(100); // causes bug
  },
});

function RootComponent() {
  return <Outlet />;
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
