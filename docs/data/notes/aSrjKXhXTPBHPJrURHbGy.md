
```Lua
newproxy(addMetatable=false): userdata
```
Creates and returns a new userdata with or without a metatable. If created with a metatable it can be readily modified with [[lang.luau.globals.getmetatable]], and if not, will have to be created using [[lang.luau.globals.setmetatable]].

## Example
```Lua
local myUserdata = newproxy(true)
getmetatable(myUserdata).__index = {1, 2, 3}
print(type(myUserdata)) --> "userdata"
print(myUserdata[1]) --> 1
```
