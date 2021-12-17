```Lua
loadstring<T: string>(code: T): function | nil, T, string | nil
```
Loads Lua code from a string, and returns it as a function. If the code is invalid, the error is returned as the third member of the tuple.