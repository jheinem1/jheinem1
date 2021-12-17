```Lua
__tostring<T>(self: T): string
```
Fired when tostring is called on the table. Also fired when encoding tables to JSON (something to note because table keys can have objects with custom metatables).