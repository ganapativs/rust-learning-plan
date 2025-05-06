# Week 6: Modules & Crates (Beginner)

## Overview

Week 6 focuses on organizing code in Rust using modules, packages, and crates. You'll learn how to structure larger projects, create reusable libraries, and document your code. This is the last week covering beginner concepts before moving to intermediate Rust topics.

## Day 1-3: Modules and Visibility

### Topics

- The module system:
  - Creating modules with `mod`
  - Module hierarchies
  - Inline modules vs separate files
- Visibility rules:
  - Public (`pub`) items
  - Private items (default)
  - Restricted visibility (`pub(crate)`, `pub(super)`, etc.)
- Paths and imports:
  - Absolute and relative paths
  - Using `use` statements
  - Re-exporting with `pub use`
  - Import grouping and nesting
- The `super` and `crate` keywords
- The 2018 module system
- Comparing with JavaScript/TypeScript modules

### Resources

- [Rust Book Ch 7](https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html)
- [Rust By Example: Modules](https://doc.rust-lang.org/rust-by-example/mod.html)
- [Rust Modules Explained](https://aloso.github.io/2021/03/28/module-system.html)
- [Rustlings: Modules exercises](https://github.com/rust-lang/rustlings/)

### Use Cases

- Organizing code in a logical manner
- Controlling the public API of your code
- Preventing access to implementation details
- Creating maintainable project structures
- Managing code dependencies

## Day 4-7: Creating Libraries and Documentation

### Topics

- Library crates vs binary crates
- Creating a library crate
- Publishing to crates.io:
  - Package metadata
  - Versioning
  - Documentation
  - License
- Documentation comments:
  - Inner documentation (`//!`)
  - Outer documentation (`///`)
  - Markdown in documentation
  - Doc tests
  - Example code
- Workspace management:
  - Setting up a workspace
  - Sharing dependencies
- Testing:
  - Unit tests
  - Integration tests
  - Organizing test code

### Resources

- [Cargo Book: Publishing](https://doc.rust-lang.org/cargo/reference/publishing.html)
- [Rust By Example: Documentation](https://doc.rust-lang.org/rust-by-example/meta/doc.html)
- [Rust By Example: Testing](https://doc.rust-lang.org/rust-by-example/testing.html)
- [Rust API Guidelines](https://rust-lang.github.io/api-guidelines/)
- [Rust Crates.io Guide](https://doc.rust-lang.org/cargo/reference/publishing.html)

### Use Cases

- Creating reusable components
- Building and sharing libraries
- Documenting code for others (and future you)
- Setting up large multi-package projects
- Testing code effectively

## Exercises

1. Refactor a simple program into multiple modules
2. Create a small library crate with a well-defined API
3. Document a library using doc comments and generate documentation
4. Set up a workspace with multiple related crates
5. Write both unit and integration tests for a library
6. Create a binary that uses your library crate

## Advanced Challenges

1. Design and implement a library with a well-thought-out API
2. Create a workspace with shared code between a library and binary
3. Implement comprehensive documentation with examples and doc tests
4. Prepare a crate for publishing (without actually publishing)

## Next Steps

After completing Week 6, you'll have mastered the basics of Rust and be ready to move to intermediate topics. Week 7 will begin the intermediate phase by exploring generics and traits, which are the foundation of Rust's powerful type system.
