---
id: HUNAhx54cdmIl25040IiG
title: loadstring
desc: 'Compiles and converts Luau code into a function.'
updated: 1640115837809
created: 1639706608985
---
```Lua
loadstring<T: string>(code: T): function | nil, T, string | nil
```
Loads Lua code from a string, and returns it as a function. If the code is invalid, the error is returned as the third member of the tuple.