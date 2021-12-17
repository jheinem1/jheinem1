```Lua
collectgarbage("count" | "collect"): number
```
Performs an operation on the Lua garbage collector based on the specified option.

Roblox’s Lua sandbox only allows the “count” option to be used, so none of the other standard options are available.

The "count" option returns the total memory in use by Lua (in kilobytes).