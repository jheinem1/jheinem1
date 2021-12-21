---
id: KQITPOsV6K0sg154kw8B7
title: print
desc: 'Prints any number of values to the console, formatting non-string values.'
updated: 1640115897776
created: 1640111355176
---
```Lua
print(...args: unknown): void
```
Receives any number of arguments, and prints their values to the output. print is not intended for formatted output, but only as a quick way to show a value, typically for debugging. For a formatted output, use string.format. On Roblox, print does not call tostring, but will metatables for the the __tostring metamethod.