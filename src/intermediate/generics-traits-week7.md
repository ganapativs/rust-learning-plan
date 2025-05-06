# Week 7: Generics & Traits (Intermediate)

## Overview

Week 7 marks the beginning of intermediate Rust concepts. This week focuses on generics and traits, which form the foundation of Rust's powerful abstraction system. These concepts are similar to generics and interfaces in TypeScript, but with additional compile-time guarantees and zero-cost abstractions.

## Day 1-4: Generic Types and Functions

### Topics

- Generic data types:
  - Generic structs
  - Generic enums
  - Generic methods
- Generic functions
- Performance of generics (monomorphization)
- Type parameters and constraints
- Generic implementations
- Multiple type parameters
- Default type parameters
- Zero-cost abstractions
- Comparing with TypeScript generics

### Resources

- [Rust Book Ch 10.1](https://doc.rust-lang.org/book/ch10-01-syntax.html)
- [Rust By Example: Generics](https://doc.rust-lang.org/rust-by-example/generics.html)
- [Generics in Rust](https://blog.logrocket.com/understanding-rust-generics/)
- [Advanced Generics](https://rustc-dev-guide.rust-lang.org/generics.html)
- [Rustlings: Generics exercises](https://github.com/rust-lang/rustlings/)

### Use Cases

- Writing code that works with multiple types
- Creating reusable data structures
- Building type-safe containers
- Avoiding code duplication
- Maintaining performance while achieving abstraction

## Day 5-7: Traits and Trait Bounds

### Topics

- Defining traits
- Implementing traits
- Default implementations
- Trait parameters
- Trait bounds:
  - Basic trait bounds
  - Multiple trait bounds
  - Where clauses
- Returning types that implement traits
- The `impl Trait` syntax
- Operator overloading with traits
- Important standard library traits:
  - `Debug`, `Display`, `Clone`, `Copy`
  - `PartialEq`, `Eq`, `PartialOrd`, `Ord`
  - `Default`, `From`, `Into`, `TryFrom`, `TryInto`
- Conditional trait implementations

### Resources

- [Rust Book Ch 10.2](https://doc.rust-lang.org/book/ch10-02-traits.html)
- [Rust By Example: Traits](https://doc.rust-lang.org/rust-by-example/trait.html)
- [Common Traits in Standard Library](https://doc.rust-lang.org/std/index.html#traits)
- [Implementing Traits](https://blog.logrocket.com/rust-traits-a-deep-dive/)
- [Rustlings: Traits exercises](https://github.com/rust-lang/rustlings/)

### Use Cases

- Defining shared behavior
- Creating flexible interfaces
- Implementing polymorphism
- Constraining generic types
- Building extensible libraries
- Customizing behavior for types

## Exercises

1. Create a generic data structure (e.g., a binary tree or linked list)
2. Implement a function that works with any type implementing a custom trait
3. Create a utility function with multiple trait bounds
4. Implement several standard library traits for a custom type
5. Build a simple collection type with generic elements
6. Create a trait with default methods and implement it for various types

## Advanced Challenges

1. Implement a generic algorithm (e.g., sorting or searching)
2. Create a type-safe event system using traits
3. Build a generic data structure with conditional trait implementations
4. Design an extensible plugin system using traits
5. Implement operator overloading for a custom numeric type

## Next Steps

After completing Week 7, you'll understand how to use generics and traits to create flexible, reusable code. Week 8 will build on this foundation by exploring advanced trait patterns and lifetime annotations.
