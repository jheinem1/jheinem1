---
id: 54LAOY2t6K6kfjDtoHUQo
title: ipairs
desc: 'Iterates over arrays.'
updated: 1639706529144
created: 1639706381423
---
```Lua
ipairs<T: table>(t: T): function, T, number
```
Returns three values: an iterator function, the table t and the number 0. Each time the iterator function is called, it returns the next numerical index-value pair in the table. When used in a generic for-loop, the return values can be used to iterate over each numerical index in the table.
## Examples
```Lua
local fruits = {"apples", "orangs", "kiwi"}
for index, fruit in ipairs(fruits) do
    print(index, fruit) --> 1 applies, 2 oranges, 3 kiwi, etc...
end
```