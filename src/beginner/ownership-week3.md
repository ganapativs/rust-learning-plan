# Week 3: Ownership Deep Dive (Beginner)

## Overview

Week 3 focuses on mastering Rust's ownership system, which is the most distinctive feature of the language. You'll explore references, borrowing rules, and how Rust handles string types - concepts that are fundamental for writing safe and efficient Rust code.

## Day 1-3: References and Borrowing

### Topics

- References and borrowing
- Immutable references (`&T`)
- Mutable references (`&mut T`)
- The borrowing rules:
  - One mutable reference OR any number of immutable references
  - References must always be valid
- Dangling references and how Rust prevents them
- Reference lifetimes (introduction)
- The Deref trait basics

### Resources

- [Rust Book Ch 4.2](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)
- [Rust By Example: Borrowing](https://doc.rust-lang.org/rust-by-example/scope/borrow.html)
- [Understanding Ownership in Rust](https://medium.com/@jesterxl/understanding-rust-ownership-borrowing-and-lifetimes-442a191d61a9)
- [Visualizing Memory Layout](https://rufflewind.com/2016-12-30/rust-move-copy-borrow)

### Use Cases

- Avoiding ownership transfer when unnecessary
- Safely allowing multiple parts of code to access data
- Preventing data races at compile time
- Modifying values in place without taking ownership

## Day 4-7: Slices and String Types

### Topics

- What are slices?
- String slices (`&str`)
- Other slice types (`&[T]`)
- String vs &str:
  - String: owned, growable UTF-8 text
  - &str: borrowed view of UTF-8 text
- Working with strings:
  - Creation and manipulation
  - Concatenation
  - Indexing and slicing (and why UTF-8 makes this complex)
- Converting between string types
- Comparison with JavaScript strings

### Resources

- [Rust Book Ch 4.3](https://doc.rust-lang.org/book/ch04-03-slices.html)
- [Rust By Example: Slices](https://doc.rust-lang.org/rust-by-example/primitives/array.html)
- [Strings in Rust](https://doc.rust-lang.org/rust-by-example/std/str.html)
- [Comprehensive Guide to Rust Strings](https://www.ameyalokare.com/rust/2017/10/12/rust-str-vs-String.html)
- [Rustlings: Strings exercises](https://github.com/rust-lang/rustlings/)

### Use Cases

- Efficiently working with text in Rust
- Safe handling of text encodings (UTF-8)
- Viewing portions of collections without copying
- Performance optimization through borrowing

## Exercises

1. Implement a function that takes a string slice and returns the first word
2. Create a program that counts characters, bytes, and grapheme clusters in a string
3. Write a function that safely handles mutable and immutable references
4. Implement a function that takes a slice of a collection and processes it
5. Create a program that demonstrates the difference between deep and shallow copying
6. Refactor a program that uses excessive `clone()` calls to use references instead

## Advanced Challenges

1. Implement a simple text processing tool that efficiently handles large strings
2. Build a function that analyzes text and extracts statistics (word count, etc.)
3. Create a data structure that maintains references to external data safely

## Next Steps

After completing Week 3, you'll have a strong grasp of Rust's ownership system - the feature that most distinguishes it from languages like JavaScript. Week 4 will build on this foundation by introducing structs and enums, Rust's primary tools for creating custom data types.
