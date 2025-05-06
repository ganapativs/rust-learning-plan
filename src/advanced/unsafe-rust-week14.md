# Week 14: Unsafe Rust (Advanced)

## Overview

Week 14 explores the unsafe side of Rust, teaching you when and how to use unsafe code responsibly. You'll learn to work with raw pointers, interface with foreign code, and build safe abstractions over unsafe implementations. This knowledge is crucial for systems programming and performance-critical code.

## Day 1-2: Understanding Unsafe Fundamentals

### Topics

- The `unsafe` keyword and its scope
- Unsafe blocks, functions, traits, and impls
- The five unsafe superpowers:
  - Dereferencing raw pointers
  - Calling unsafe functions
  - Implementing unsafe traits
  - Accessing/modifying mutable static variables
  - Accessing union fields
- Safety invariants and contracts
- Undefined behavior (UB) in Rust
- Common unsafe patterns and anti-patterns
- Tools for detecting UB:
  - MIRI (Mid-level IR Interpreter)
  - Address Sanitizer (ASAN)
  - Valgrind

### Resources

- [The Rustonomicon](https://doc.rust-lang.org/nomicon/) - The dark arts of unsafe Rust
- [Unsafe Code Guidelines](https://rust-lang.github.io/unsafe-code-guidelines/)
- [Understanding Undefined Behavior](https://www.ralfj.de/blog/2019/07/14/uninit.html)
- [MIRI Documentation](https://github.com/rust-lang/miri)
- [What Is Rust's Unsafe?](https://www.youtube.com/watch?v=QAz-maaH0KM) - Video explanation

### Use Cases

- Building safe abstractions over low-level operations
- Performance-critical code where safety checks are too costly
- Implementing data structures with complex invariants
- Interoperating with non-Rust code
- Bypassing compiler limitations in safe code

## Day 3-4: Raw Pointers and Memory Manipulation

### Topics

- Raw pointer types: `*const T` and `*mut T`
- Pointer creation and dereferencing
- Pointer arithmetic and alignment
- Null pointers and validity checks
- Converting between references and raw pointers
- Working with uninitialized memory:
  - The deprecated `std::mem::uninitialized`
  - Using `MaybeUninit<T>`
  - Initialization patterns
- Byte manipulation with `std::ptr` functions
- Memory mapped I/O
- Bit manipulation and direct memory access
- Custom `Drop` implementations with raw pointers

### Resources

- [Rustonomicon: Raw Pointers](https://doc.rust-lang.org/nomicon/raw-pointers.html)
- [std::ptr Documentation](https://doc.rust-lang.org/std/ptr/index.html)
- [MaybeUninit Documentation](https://doc.rust-lang.org/std/mem/union.MaybeUninit.html)
- [Memory Alignment in Rust](https://doc.rust-lang.org/std/mem/fn.align_of.html)
- [Crust of Rust: Raw Pointers](https://www.youtube.com/watch?v=q6paRBbLgNw) by Jon Gjengset

### Use Cases

- Custom allocators and memory pools
- Zero-copy data processing
- Hardware device access
- Implementing complex data structures (linked lists, trees)
- Low-level optimization of algorithms
- Working with memory-mapped files

## Day 5-7: Safe Abstractions Over Unsafe Code

### Topics

- Designing safe APIs that use unsafe internally
- Encapsulating unsafe code
- Proving correctness of unsafe code
- Documentation practices for unsafe code
- Safety invariants:
  - Establishing and maintaining invariants
  - Documenting invariants
- Testing unsafe code:
  - Fuzz testing
  - Property-based testing
  - MIRI-based testing
- Wrapper types and abstraction techniques
- Case studies of unsafe in standard library:
  - `Vec<T>` implementation
  - `String` implementation
  - Smart pointers
- Auditing unsafe code
- The `unsafe_op_in_unsafe_fn` lint

### Resources

- [Rustonomicon: Implementing Vec](https://doc.rust-lang.org/nomicon/vec-layout.html)
- [Rust Standard Library Source](https://github.com/rust-lang/rust/tree/master/library)
- [Fuzz Testing in Rust](https://rust-fuzz.github.io/book/)
- [Testing Strategies for Unsafe Code](https://blog.regehr.org/archives/1687)
- [Notes on Type Punning](https://gankra.github.io/blah/rust-layouts-and-abis/)
- [Unsafe Guidelines WG](https://github.com/rust-lang/unsafe-code-guidelines)

### Use Cases

- Building foundational libraries
- Creating data structures with complex internal representations
- Performance optimization of critical paths
- Interfacing with hardware or other languages
- Framework development
- Systems programming

## Exercises

1. Implement a basic intrusive linked list using raw pointers
2. Create a safe abstraction over an unsafe memory buffer
3. Build a simple arena allocator using unsafe code
4. Implement a custom slice type with different safety guarantees
5. Use raw pointers to implement a non-standard collection
6. Create a safe wrapper around a C library function

## Advanced Challenges

1. Implement a thread-safe buffer with lockless operations
2. Build a custom smart pointer with specialized memory management
3. Implement a memory-efficient B-tree using raw pointers
4. Create a zero-copy parser for a binary format
5. Design and implement a safe API for memory-mapped I/O operations

## Next Steps

After completing Week 14, you'll understand how to work with unsafe Rust responsibly. Week 15 will build on this foundation to explore advanced design patterns that leverage Rust's type system for maximum safety and expressiveness.
