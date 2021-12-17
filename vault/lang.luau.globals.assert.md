---
id: yJPgeXVXAieNWRmNCN8qn
title: assert
desc: 'Throws a conditional error.'
updated: 1639705804283
created: 1639705232378
---
```Lua
assert<T>(value: T, msg: string): T
```
Throws an error if the provided `value` is `false` or `nil`. If the assertion passes, it returns all values passed to it.
## Examples
```Lua
local product = 90 * 4
assert(product == 360, "Oh dear, multiplication is broken")
-- The line above does nothing, because 90 times 4 is 360
```