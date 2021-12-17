---
id: qRu2pgZ7Wd1m1jXmGKwTx
title: getfenv
desc: 'Gets a function environment.'
updated: 1639705837029
created: 1639705821831
---
```Lua
getfenv(stack: number | function): table
```
Returns the current environment in use by the caller.

- If provided with a function, the environment of the function will be returned.
- If provided with an integer, getfenv will provide the environment of the function at the provided stack level: Level 1 is the function calling getfenv. If stack is 0, getfenv returns the global environment of the current script. When using getfenv to get the current environment of a script, it will return the same table every time within the specific thread.
## Examples
### Getting Current Environment
```Lua
myVariable = "Hello, environments" -- Note: a global variable (non-local)
local env = getfenv()
print(env["myVariable"]) --> Hello, environments
```
### Getting the Environment of a Function
```Lua
function printMessage()
    print(message)
end
local env = getfenv(printMessage)
env.message = "Hello, function environments"
printMessage() --> Hello, function environments
```
### Getting the Environment of a Stack
```Lua
function whatIsThePassword()
    local env = getfenv(1) -- Get the environment 1 level up, or whatever called this function
    print(env.password) -- Get the password from the environment one level up
    print(password) --> nil
end
    
function openSesame()
    local password = "secret" -- A variable local to openSesame
    whatIsThePassword()
end
openSesame()
```