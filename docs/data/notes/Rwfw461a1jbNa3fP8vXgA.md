```Lua
getmetatable<T: table | string | userdata>(t: T): T?
```
Returns the [[lang.luau.metatable]] of the given table t if it has one, otherwise returns nil. If t does have a [[lang.luau.metatable]], and the [[lang.luau.metatable.__metatable]] metamethod is set, it returns that value instead.
## Examples
```Lua
-- Demonstrate getmetatable:
local meta = {}
local t = setmetatable({}, meta)
print(getmetatable(t) == meta) --> true
-- Make the original metatable unrecoverable by setting the __metatable metamethod:
meta.__metatable = "protected"
print(getmetatable(t)) --> protected
```