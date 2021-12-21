---
id: UJbkI3uFmVsctY0mOBIIl
title: type
desc: 'Returns the type of the provided value.'
updated: 1640115932131
created: 1640112619319
---
```Lua
type(v: unknown): "number" | "string" | "boolean" | "table" | "function" | "thread" | "userdata" | "vector"
```
Returns the type of its only argument, coded as a string. The possible results of this function are "nil" (a string, not the value nil), "number", "string", "boolean", "table", "function", "thread", "userdata", and in Roblox, "vector".