```Lua
setfenv<F: function>(environment: F | number, fenv: table): F?
```
Sets the environment to be used by the given function. f can be a function or a number that specifies the function at that stack level: Level 1 is the function calling setfenv. setfenv returns the given function.

As a special case, when f is 0 setfenv changes the environment of the running thread. In this case, setfenv returns no values.