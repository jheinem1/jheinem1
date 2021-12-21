```Lua
tonumber(v: unknown): number?
```
Attempts to convert the arg into a number with a specified base to interpret the value in. If it cannot be converted, this function returns nil.

The base may be any integer between 2 and 36, inclusive. In bases above 10, the letter ‘A’ (in either upper or lower case) represents 10, ‘B’ represents 11, and so forth, with ‘Z’ representing 35. In base 10 (the default), the number may have a decimal part, as well as an optional exponent part. In other bases, only unsigned integers are accepted.

If a string begins with “0x” and a base is not provided, the 0x is trimmed and the base is assumed to be 16, or hexadecimal.
## Examples
```Lua
print(tonumber("1337")) --> 1337 (assumes base 10, decimal)
print(tonumber("1.25")) --> 1.25 (base 10 may have decimal portions)
print(tonumber("3e2")) --> 300 (base 10 may have exponent portion, 3 &times; 10 ^ 2)
print(tonumber("25", 8)) --> 21 (base 8, octal)
print(tonumber("0x100")) --> 256 (assumes base 16, hexadecimal)
print(tonumber("roblox")) --> nil (does not raise an error)
-- Tip: use with assert if you would like unconvertable numbers to raise an error
print(assert(tonumber("roblox"))) --> Error: assertion failed
```