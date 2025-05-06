# Week 4: Structs and Enums (Beginner)

## Overview

Week 4 introduces Rust's custom data types: structs and enums. These are Rust's building blocks for creating rich, type-safe data structures and are comparable to classes and interfaces in JavaScript/TypeScript, but with Rust's safety guarantees.

## Day 1-3: Structs and Methods

### Topics

- Defining and instantiating structs
- Field init shorthand
- Struct update syntax
- Tuple structs
- Unit-like structs
- Methods with `impl` blocks
- Associated functions (like static methods)
- Builder pattern in Rust
- Deriving traits (`Debug`, `Clone`, etc.)
- Memory layout of structs

### Resources

- [Rust Book Ch 5](https://doc.rust-lang.org/book/ch05-00-structs.html)
- [Rust By Example: Structs](https://doc.rust-lang.org/rust-by-example/custom_types/structs.html)
- [Rustlings: Structs exercises](https://github.com/rust-lang/rustlings/)
- [Memory Layout of Rust Data Types](https://www.reddit.com/r/rust/comments/9gw5an/memory_layout_of_rust_data_types/)

### Use Cases

- Creating domain-specific data types
- Grouping related data together
- Encapsulating data and behavior
- Implementing object-oriented patterns in Rust
- Building reusable components

## Day 4-7: Enums, Pattern Matching, Option/Result

### Topics

- Defining enums
- Enum variants with data
- Methods on enums
- The `Option` enum:
  - `Some` and `None` variants
  - Replacing null values
- The `Result` enum:
  - `Ok` and `Err` variants
  - Error handling
- Pattern matching with `match`
- Advanced pattern matching:
  - Destructuring
  - Guards
  - Binding
- The `if let` syntax
- The `while let` syntax
- Comparing with TypeScript union types

### Resources

- [Rust Book Ch 6](https://doc.rust-lang.org/book/ch06-00-enums.html)
- [Rust By Example: Enums](https://doc.rust-lang.org/rust-by-example/custom_types/enum.html)
- [Pattern Matching in Rust](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)
- [Option Enum Documentation](https://doc.rust-lang.org/std/option/enum.Option.html)
- [Result Enum Documentation](https://doc.rust-lang.org/std/result/enum.Result.html)
- [Rustlings: Enums exercises](https://github.com/rust-lang/rustlings/)

### Use Cases

- Representing states and variants
- Handling nullable values safely without null references
- Error handling without exceptions
- Creating type-safe state machines
- Domain modeling with exhaustive pattern matching

## Exercises

1. Create a `Rectangle` struct with width and height fields and methods to calculate area and perimeter
2. Implement a simple `Shape` enum with variants for different shapes and a method to calculate area
3. Build a simple address book using structs and enums
4. Implement error handling using the `Result` type
5. Create a program that safely handles optional values using `Option`
6. Design a state machine using enums and pattern matching

## Advanced Challenges

1. Implement a simple vector library with structs and methods
2. Build a configuration parser that handles errors gracefully with Result
3. Create a command-line parser using enums for different commands
4. Design a simplified JSON representation using Rust enums and structs

## Next Steps

After completing Week 4, you'll be able to design custom data types in Rust and handle errors safely using the Option and Result types. Week 5 will expand on error handling and introduce Rust's collection types.
