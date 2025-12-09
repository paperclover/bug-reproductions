import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/other")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>other</h1>
    </div>
  );
}
