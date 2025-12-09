import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users")({
  server: {
    handlers: {
      GET() {
        return new Response("Hello /users");
      },
    },
  },
});
