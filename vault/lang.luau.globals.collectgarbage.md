---
id: ttZMMRX2DioqunPcnS3He
title: collectgarbage
desc: 'Used to get memory usage and manually trigger garbage collection.'
updated: 1639705786491
created: 1639705418742
---
```Lua
collectgarbage("count" | "collect"): number
```
Performs an operation on the Lua garbage collector based on the specified option.

Roblox’s Lua sandbox only allows the “count” option to be used, so none of the other standard options are available.

The "count" option returns the total memory in use by Lua (in kilobytes).