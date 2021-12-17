```Lua
__eq<T>(self: T, value: T): boolean
```
The == equal to operator. Requires two values with the same metatable and basic type (table/userdata/etc.); does not work with a table and another random table, or with a userdata and a table.