# Week 9: Concurrency & Parallelism (Intermediate)

## Overview

Week 9 introduces concurrent and parallel programming in Rust. You'll learn how Rust's ownership and type system guarantees thread safety, eliminating entire classes of bugs common in other languages. This week covers both thread-based concurrency and message passing, providing a strong foundation for high-performance, safe concurrent code.

## Day 1-4: Threading and Shared State

### Topics

- Creating threads with `std::thread`
- Thread lifecycle management
- Join handles and blocking
- Thread-local storage
- Shared state concurrency:
  - Mutex and interior mutability
  - RwLock for multiple readers
  - Arc for thread-safe reference counting
- Poisoning and recovery
- Thread safety traits:
  - Send and Sync
  - Auto traits and marker traits
  - Thread bounds on generic types
- Atomic types in `std::sync::atomic`
- Memory ordering
- Barriers and thread coordination
- Thread pools and work stealing

### Resources

- [Rust Book Ch 16.1-16.3](https://doc.rust-lang.org/book/ch16-01-threads.html)
- [Rust Atomics and Locks](https://marabos.nl/atomics/) (free online book)
- [Fearless Concurrency](https://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html)
- [Rust Concurrency Explained](https://www.youtube.com/watch?v=Dbytx0ivH7Q)
- [Thread documentation](https://doc.rust-lang.org/std/thread/)
- [Sync documentation](https://doc.rust-lang.org/std/sync/)

### Use Cases

- Multi-threaded data processing
- Parallelizing CPU-intensive tasks
- Managing shared resources safely
- Building thread-safe data structures
- Implementing concurrent algorithms
- Utilizing multi-core processors effectively

## Day 5-7: Message Passing and Channels

### Topics

- Message passing concurrency
- Channels in `std::sync::mpsc`:
  - Single-producer, multi-consumer
  - Bounded vs unbounded channels
  - Synchronous vs asynchronous channels
- Channel ownership and borrowing
- Producer and consumer patterns
- Fan-out and fan-in designs
- Implementing worker pools
- Error handling in concurrent contexts
- Actor pattern basics
- Synchronization primitives:
  - Barrier
  - Condvar (condition variables)
  - Semaphore (from third-party crates)
- Comparing with JavaScript's approach (Workers, Promises)

### Resources

- [Rust Book Ch 16.2](https://doc.rust-lang.org/book/ch16-02-message-passing.html)
- [MPSC documentation](https://doc.rust-lang.org/std/sync/mpsc/)
- [Crossbeam Channels](https://docs.rs/crossbeam-channel/latest/crossbeam_channel/)
- [Rust Concurrency Patterns](https://www.youtube.com/watch?v=Dbytx0ivH7Q)
- [Actor Systems in Rust](https://www.youtube.com/watch?v=astrKeh8W1w)

### Use Cases

- Event-driven architectures
- Pipeline processing models
- Task distribution systems
- Producer-consumer scenarios
- Backpressure handling
- Building responsive applications

## Exercises

1. Create a multi-threaded application that processes data in parallel
2. Implement a thread-safe cache with Mutex and Arc
3. Build a pipeline using channels for data processing
4. Create a thread pool with work distribution via channels
5. Develop a simple map-reduce pattern using threads
6. Implement a concurrent counter with atomic types

## Advanced Challenges

1. Build a multi-threaded web crawler
2. Implement a thread-safe data structure (e.g., concurrent HashMap)
3. Create a work-stealing thread pool
4. Develop an actor system for message passing
5. Build a parallel image processing tool

## Next Steps

After completing Week 9, you'll understand how to write safe, concurrent code in Rust. Week 10 will build on this foundation by introducing asynchronous programming with Rust's async/await system.
