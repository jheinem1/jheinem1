```Lua
__le<T>(self: T, value: T): boolean
```
The <= operator; NOTE: Using the > greater than operator will invoke this metamethod and return the opposite of what this returns, as greater than is the same as not less than or equal to. Requires two values with the same metatable and basic type (table/userdata/etc.); does not work with a table and another random table, or with a userdata and a table.