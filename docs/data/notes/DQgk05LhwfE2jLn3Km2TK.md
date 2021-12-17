
A generic data structure with an array and hashmap portion. Can store any datatype in Luau as either a value or key. In addition to basic syntax, the [[lang.luau.library.table]] is used to manipulate tables, and [[lang.luau.globals.pairs]] and [[lang.luau.globals.ipairs]] are used to iterate over tables. Arrays in Luau start at `1` instead of `0`.

To get a value from a table that has non-string keys, the syntax `t[k]` is used. Similar syntax is used for assignment (`t[k] = v`). Luau offers a cleaner way to get string keys that conform to variable syntax; `t.k` and `t.k = v` respectively.

To get the length of the array portion of a table, the `#` operator is used- `#t`, and will return an integer.

Most of the functionality of tables can be overloaded through the use of the [[lang.luau.metatable]].

## Examples
### Array
```Lua
local t = {1, 2, 3, 4, 5}
print(t[1]) --> 1
print(t[5]) --> 5
```
### Dictionary/Object
```Lua
local obj = {
    Key = 13,
    [true] = 14,
    [3] = function() print("Hello World!") end
}
-- These two are both methods of accessing string keys
print(obj.Key) --> 13
print(obj["Key"]) --> 13
-- Any type can be used as a key in Luau
print(obj[true]) --> 14
-- Any type can be used as a value in Luau
obj[3]() --> "Hello World!"
```
### Hybrid
```Lua
local t = {
    [1] = 1,
    [2] = 2,
    ["Hello World!"] = false
}
print(#t) --> 2
print(t[2]) --> 2
print(t["Hello World!"]) --> false
```