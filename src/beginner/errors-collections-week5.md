# Week 5: Error Handling & Collections (Beginner)

## Overview

Week 5 focuses on two critical aspects of Rust programming: robust error handling and working with collections. You'll learn idiomatic error handling patterns and how to effectively use Rust's built-in collection types.

## Day 1-3: Error Handling

### Topics

- Error handling philosophy in Rust
- Using `Result<T, E>` for recoverable errors
- The `?` operator for error propagation
- Creating custom error types
- Using `thiserror` for deriving error types
- Using `anyhow` for application error handling
- `panic!` and unrecoverable errors
- When to use `unwrap()` and `expect()`
- `unwrap_or()`, `unwrap_or_else()`, and `unwrap_or_default()`
- Error conversion and the `From` trait
- Comparing with JavaScript/TypeScript error handling

### Resources

- [Rust Book Ch 9](https://doc.rust-lang.org/book/ch09-00-error-handling.html)
- [Rust By Example: Error Handling](https://doc.rust-lang.org/rust-by-example/error.html)
- [Anyhow Crate](https://docs.rs/anyhow/latest/anyhow/)
- [Thiserror Crate](https://docs.rs/thiserror/latest/thiserror/)
- [Error Handling in Rust](https://blog.burntsushi.net/rust-error-handling/)
- [Rustlings: Error Handling exercises](https://github.com/rust-lang/rustlings/)

### Use Cases

- Building robust applications that handle errors gracefully
- Creating libraries with clear error reporting
- Propagating errors up the call stack
- Avoiding exception-like control flow
- Making impossible states impossible through the type system

## Day 4-7: Collections and Iterators

### Topics

- Vectors (`Vec<T>`):
  - Creating and updating
  - Reading elements
  - Iterating over values
- HashMaps:
  - Creating and inserting
  - Accessing values
  - Updating based on existing values
  - Ownership with hash maps
- Other collections:
  - VecDeque
  - LinkedList
  - HashSet
  - BTreeMap/BTreeSet
- The Iterator trait:
  - Creating iterators
  - Common methods (map, filter, fold)
  - Collecting results
  - Iterator adaptors (chain, zip, etc.)
- Comparing with JavaScript arrays and objects

### Resources

- [Rust Book Ch 8](https://doc.rust-lang.org/book/ch08-00-common-collections.html)
- [Rust By Example: Collections](https://doc.rust-lang.org/rust-by-example/std/vec.html)
- [Iterator Documentation](https://doc.rust-lang.org/std/iter/trait.Iterator.html)
- [Effective Rust: Iterators](https://www.lurklurk.org/effective-rust/iterators.html)
- [Rustlings: Collections exercises](https://github.com/rust-lang/rustlings/)

### Use Cases

- Managing groups of data efficiently
- Choosing the right collection for performance needs
- Transforming data with iterators
- Building data processing pipelines
- Working with complex data structures

## Exercises

1. Create a program that reads a file and handles potential errors with custom error types
2. Build a function that processes data from a vector and propagates errors using `?`
3. Implement a simple key-value store using HashMap
4. Create a program that uses iterators to process data from multiple sources
5. Build a CLI app that demonstrates proper error handling and reporting
6. Implement a function that processes collections with different iterator adaptors

## Advanced Challenges

1. Create a custom collection type that implements the Iterator trait
2. Build an error type hierarchy for a multi-layered application
3. Implement a simple data processing pipeline with iterators and error handling
4. Create a configuration system that validates input and reports helpful errors

## Next Steps

After completing Week 5, you'll have a solid understanding of error handling patterns and collection usage in Rust. Week 6 will focus on organizing your code with Rust's module system and creating reusable libraries.
