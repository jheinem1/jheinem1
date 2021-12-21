---
id: BWRrs91i3XkBx7T3ht2Wu
title: setmetatable
desc: 'Sets the metatable for the given value if possible.'
updated: 1640112425321
created: 1640112248108
---
```Lua
setmetatable<T: table | string | userdata>(t: T, metatable: table): T
```
Sets the metatable for the given table t to newMeta. If newMeta is nil, the metatable of t is removed. Finally, this function returns the table t which was passed to it. If t already has a metatable whose __metatable metamethod is set, calling this on t raises an error.
## Examples
```Lua
local meta = {__metatable = "protected"}
local t = {}
setmetatable(t, meta) -- This sets the metatable of t
-- We now have a table, t, with a metatable. If we try to change it...
setmetatable(t, {}) --> Error: cannot change a protected metatable
```