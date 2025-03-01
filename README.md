Compare the performance of calling a WebAssembly function vs calling a JavaScript function.

## Run

For a simple add() function:

```bash
deno run main.ts
# 100000000 executions of wasm.add() took 270.368662 milliseconds
# 100000000 executions of add() took 34.410082999999986 milliseconds
```

TODO explain why the execution is of the wasm function is slower here

TODO show the advantage of wasm in another example here
