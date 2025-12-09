import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/not-found")({
  loader() {
    throw notFound();
  },
});
