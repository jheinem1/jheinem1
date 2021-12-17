---
id: 4TNZB8TU4VMPjCVfQbopB
title: __tostring
desc: 'Fired when tostring is called on the table.'
updated: 1639691667090
created: 1639691536621
---
```Lua
__tostring<T>(self: T): string
```
Fired when tostring is called on the table. Also fired when encoding tables to JSON (something to note because table keys can have objects with custom metatables).