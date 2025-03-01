import { assertEquals } from "@std/assert";
import { add } from "./main.ts";
import { functions } from "./webassembly.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
  assertEquals(functions.add(2, 3), 5);
});
