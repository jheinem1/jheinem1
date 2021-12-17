---
id: WBrkCNlRYBSXW8DYk4t9R
title: table.create
desc: 'Creates an array of the given size'
updated: 1639694227226
created: 1639694157770
---
```Lua
table.create(count: number, value?: unknown): table
```
Given an array where all elements are strings or numbers, returns the string t[i] … sep … t[i+1] … sep … t[j]. The default value for sep is an empty string, the default for i is 1, and the default for j is #t. If i is greater than j, returns the empty string.