```Lua
pcall(func: function, ...args?: unknown): boolean, ...unknown?
```
Calls the function func with the given arguments in protected mode. This means that any error inside func is not propagated; instead, pcall catches the error and returns a status code. Its first result is the status code (a boolean), which is true if the call succeeds without errors. In such case, pcall also returns all results from the call, after this first result. In case of any error, pcall returns false plus the error message.