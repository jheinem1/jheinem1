```Lua
xpcall(f: function, err: function, ...args?: unknown): boolean, ...unknown?
```
This function is similar to pcall, except that you can set a new error handler.

xpcall calls function f in protected mode, using err as the error handler, and passes a list of arguments. Any error inside f is not propagated; instead, xpcall catches the error, calls the err function with the original error object, and returns a status code. Its first result is the status code (a boolean), which is true if the call succeeds without errors. In this case, xpcall also returns all results from the call, after this first result. In case of any error, xpcall returns false plus the result from err.