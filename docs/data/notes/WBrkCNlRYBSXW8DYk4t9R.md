```Lua
table.create(count: number, value?: unknown): table
```
Given an array where all elements are strings or numbers, returns the string t[i] … sep … t[i+1] … sep … t[j]. The default value for sep is an empty string, the default for i is 1, and the default for j is #t. If i is greater than j, returns the empty string.