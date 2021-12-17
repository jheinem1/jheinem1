---
id: oM2z76xrome25kNjbvPl2
title: Metatable
desc: ''
updated: 1639690839654
created: 1639690520961
---

A metatable is a table full of metamethods which overload the functionality of existing types in Luau. Under the hood, every operator in Luau is essentially a function call. Metatables are primarily used to add functionality to [[lang.luau.types.userdata]], which can easily be implemented in C++.

## Metamethods

Metamethods are functions within metatables such as [[lang.luau.metatable.__index]] and [[lang.luau.metatable.__add]] that define the behavior of operators in Luau acting on a given type.

## Interaction

[[lang.luau.globals.setmetatable]] and [[lang.luau.globals.getmetatable]] are primarily used to interact with metatables.