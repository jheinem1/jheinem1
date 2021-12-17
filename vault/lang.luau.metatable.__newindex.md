---
id: 08lLiEUrB0KWQ2g18NPqk
title: __newindex
desc: ''
updated: 1639691811283
created: 1639691058486
---
```Lua
__newindex<T>(self: T, key: unknown, value: unknown): nil
```
OR
```Lua
__newindex: table
```
Fires when table[index] tries to be set (table[index] = value), if table[index] is nil. Can also be set to a table, in which case that table will be indexed.