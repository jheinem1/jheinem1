---
id: s8xulmSkomuwYY59g1g2e
title: pairs
desc: 'Iterates over tables.'
updated: 1639705225826
created: 1639701798750
---
```Lua
pairs<T: table>(t: T): function, T
```
Returns an iterator function, the passed table t and nil, so that the construction will iterate over all key/value pairs of that table when used in a generic for-loop. This is a wrapper for [[lang.luau.globals.next]].
## Examples
```Lua
local scores = { ["John"] = 5, ["Sally"] = 10 }
for name, score in pairs(scores) do
    print(name .. " has score: " .. score) -- "John has score: 5" etc
end
```