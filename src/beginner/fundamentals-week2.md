# Week 2: Rust Fundamentals (Beginner)

## Overview

This week introduces the core language fundamentals and starts exploring Rust's unique ownership system. You'll learn basic syntax, variable handling, and control flow patterns that form the foundation of Rust programming.

## Day 1-2: Variables, Data Types, and Functions

### Topics

- Variables and mutability
- Constants
- Shadowing
- Basic data types:
  - Integers (i8, i16, i32, i64, i128, isize)
  - Unsigned integers (u8, u16, u32, u64, u128, usize)
  - Floating-point (f32, f64)
  - Booleans
  - Characters
  - Tuples
  - Arrays
- Type annotations and inference
- Basic functions:
  - Parameters and return values
  - Statements vs expressions

### Resources

- [Rust Book Ch 2-3](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html)
- [Rust By Example: Variables](https://doc.rust-lang.org/rust-by-example/variable_bindings.html)
- [Rust By Example: Functions](https://doc.rust-lang.org/rust-by-example/fn.html)
- [Rustlings: Variables and Functions](https://github.com/rust-lang/rustlings/)

### Use Cases

- Understanding Rust's type system compared to JavaScript's dynamic typing
- Building blocks for more complex data structures
- Writing reusable code with functions
- Managing memory efficiently with appropriate data types

## Day 3-4: Control Flow and Loops

### Topics

- If expressions
- Loops:
  - loop
  - while
  - for
- Loop labels and breaking to labels
- Returning values from loops
- Match expressions (basic pattern matching)
- If let expressions

### Resources

- [Rust Book Ch 3.5](https://doc.rust-lang.org/book/ch03-05-control-flow.html)
- [Rust By Example: Flow Control](https://doc.rust-lang.org/rust-by-example/flow_control.html)
- [Rustlings: If and Loops](https://github.com/rust-lang/rustlings/)

### Use Cases

- Controlling program execution flow
- Iterating over collections
- Pattern matching for cleaner code (compared to switch/case)
- Early returns from loops

## Day 5-7: Ownership Basics

### Topics

- What is ownership?
- Stack vs heap memory
- Move semantics:
  - Variable scope
  - Memory allocation and freeing
  - Moving ownership between variables
- Clone and Copy traits
- Introduction to borrowing
- Comparing with JavaScript's reference model

### Resources

- [Rust Book Ch 4.1-4.2](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)
- [Rust By Example: Ownership and Moves](https://doc.rust-lang.org/rust-by-example/scope/move.html)
- [Understanding Ownership in Rust](https://blog.logrocket.com/understanding-ownership-in-rust/)
- [Rustlings: Ownership exercises](https://github.com/rust-lang/rustlings/)

### Use Cases

- Memory safety without garbage collection
- Preventing data races at compile time
- Resource management beyond memory (file handles, network connections)
- Efficient memory usage without manual management

## Exercises

1. Create a program that converts between temperature scales (F/C)
2. Write a function that calculates factorial using different loop types
3. Implement a simple calculator using match expressions
4. Create a function that works with a vector and demonstrates ownership principles
5. Compare similar code in JavaScript and Rust, noting differences in memory handling

## Next Steps

After completing Week 2, you'll understand Rust's fundamental syntax and have started exploring its unique ownership system. Week 3 will build on this by diving deeper into references, borrowing, and Rust's string types.
