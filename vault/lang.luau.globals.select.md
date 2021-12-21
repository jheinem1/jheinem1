---
id: FRTyFQ5iHxeh3RGTfAjti
title: select
desc: 'Returns all arguments after '
updated: 1640115907360
created: 1640111652536
---
```Lua
select(index: "#" | number, ...args: unknown): ...unknown
```
Returns all arguments after argument number index. If negative, it will return from the end of the argument list.

Returns the total number of arguments that were passed after the cmd argument, which must be "#" to use select in this fashion.
## Examples
### CMD String Argument
```Lua
print(select("#", "A", "B", "C")) --> 3
```
### Number Argument
```Lua
print(select(2, "A", "B", "C")) --> B C
print(select(-1, "A", "B", "C")) --> C
```