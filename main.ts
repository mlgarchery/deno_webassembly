export function add(a: number, b: number): number {
  return a + b;
}

import { functions as wasm } from "./webassembly.ts";

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  //  compare 1 000 000 executions of add() versus 1 000 000 execution of functions.add() (which is the webassembly function) and print timings
  const runs = 100000000;
  const start = performance.now();
  for (let i = 0; i < runs; i++) {
    wasm.add(2, 3);
  }
  const end = performance.now();
  console.log(
    `${runs} executions of wasm.add() took`,
    end - start,
    "milliseconds"
  );

  const start2 = performance.now();
  for (let i = 0; i < runs; i++) {
    add(2, 3);
  }
  const end2 = performance.now();
  console.log(
    `${runs} executions of add() took`,
    end2 - start2,
    "milliseconds"
  );
}
