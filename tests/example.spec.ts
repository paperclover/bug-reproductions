import { expect, test } from "@playwright/test";
import { Example } from "../src/lib.ts";

test("can construct example", async () => {
  new Example();
});
