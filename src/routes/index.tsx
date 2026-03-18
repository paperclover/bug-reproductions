import { createFileRoute } from "@tanstack/react-router";
import DOMPurify from "isomorphic-dompurify";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      {DOMPurify.sanitize(
        "<div style='color:red' onclick='alert(1)'>hello</div>",
      )}
    </div>
  );
}
