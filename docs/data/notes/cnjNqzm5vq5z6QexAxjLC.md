```Lua
tostring(v: unknown): string
```
Receives an argument of any type and converts it to a string in a reasonable format. For complete control of how numbers are converted, use string.format. If the metatable of e has a __tostring metamethod, then it will be called with e as the only argument and will return the result.
## Examples
```Lua
local isRobloxCool = true
-- Convert the boolean to a string then concatenate:
print("Roblox is cool: " .. tostring(isRobloxCool)) --> Roblox is cool: true
```