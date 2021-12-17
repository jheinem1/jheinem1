---
id: YE2a9H2yskFGdGhBPJgW9
title: __index
desc: ''
updated: 1639691792438
created: 1639690839553
---
```Lua
__index<T>(self: T, key: unknown): typeof T[key]
```
OR
```Lua
__index: table
```
Fires when self[key] is indexed, if self[key] is nil. Can also be set to a table, in which case that table will be indexed.