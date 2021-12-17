```Lua
table.find(haystack: table, needle: unknown, init?: number): nil | number | unknown
```
Within the given array-like table haystack, find the first occurrence of value needle, starting from index init or the beginning if not provided. If the value is not found, nil is returned.

A linear search algorithm is performed.
## Examples
```Lua
local t = {"a", "b", "c", "d", "e"}
print(table.find(t, "d")) --> 4
print(table.find(t, "z")) --> nil, because z is not in the table
print(table.find(t, "b", 3)) --> nil, because b appears before index 3
```