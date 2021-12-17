---
id: wtK97HfzkALzHnRqHD5T6
title: table.clear
desc: 'Sets the value for all keys within the given table to nil.'
updated: 1639692855525
created: 1639692719053
---
```Lua
table.clear(table: table): nil
```
Sets the value for all keys within the given table to nil. This causes the # operator to return 0 for the given table. The allocated capacity of the table’s array portion is maintained, which allows for efficient re-use of the space.

This function does not delete/destroy the table provided to it. This function is meant to be used specifically for tables that are to be re-used.

## Examples
```Lua
local grades = {95, 82, 71, 92, 100, 60}
print(grades[4], #grades) --> 92, 6
table.clear(grades)
print(grades[4], #grades) --> nil, 0
-- If grades is filled again with the same number of entries,
-- no potentially expensive array resizing will occur
-- because the capacity was maintained by table.clear.
```