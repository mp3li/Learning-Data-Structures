<h1 align="center">Learning Data Structures</h1>

<p align="center">
  A complete SOFT144 data structures coursework repository covering stacks, queues, linked lists, hash tables, trees, binary search trees, heaps, priority queues, and a final browser-based application.
</p>

<p align="center">
  <img alt="Language" src="https://img.shields.io/badge/language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=111111" />
  <img alt="Runtime" src="https://img.shields.io/badge/runtime-Browser%20%2B%20Node.js-339933?style=for-the-badge&logo=node.js&logoColor=ffffff" />
  <img alt="Course" src="https://img.shields.io/badge/course-SOFT144-1f6feb?style=for-the-badge" />
  <img alt="Duration" src="https://img.shields.io/badge/duration-11%20weeks-aa5215?style=for-the-badge" />
  <img alt="Status" src="https://img.shields.io/badge/status-coursework%20portfolio-66310c?style=for-the-badge" />
</p>

<p align="center">
  This repository is organized as the GitHub-based data structures portfolio from an 11-week college course completed as part of my Software Development and Business Analytics associate degree program.
</p>

## Table of Contents

<details>
<summary>Open Table of Contents</summary>

<br />

- [About This Repository](#about-this-repository)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [How to Run the Work](#how-to-run-the-work)
- [Coursework Overview](#coursework-overview)
- [Week 1 - Stacks, Queues, Tests, and Benchmarks](#week-1---stacks-queues-tests-and-benchmarks)
- [Week 2 - Singly Linked List and Array Comparison](#week-2---singly-linked-list-and-array-comparison)
- [Week 3 - Doubly Linked List](#week-3---doubly-linked-list)
- [Week 4 - Hash Table Implementation and Benchmarking](#week-4---hash-table-implementation-and-benchmarking)
- [Week 5 - Hash Table Benchmarking and Memory Comparison](#week-5---hash-table-benchmarking-and-memory-comparison)
- [Week 6 - General Trees and Recursion](#week-6---general-trees-and-recursion)
- [Week 7 - Binary Search Trees](#week-7---binary-search-trees)
- [Week 8 - Binary Heap and Priority Queue](#week-8---binary-heap-and-priority-queue)
- [Final Project - Camping Gear Inventory And Packing Planner](#final-project---camping-gear-inventory-and-packing-planner)
- [Skills Demonstrated](#skills-demonstrated)
- [Verification Guide](#verification-guide)
- [Documentation Map](#documentation-map)
- [Final Project README Appendix](#final-project-readme-appendix)

</details>

## About This Repository

Learning Data Structures is a JavaScript-focused course repository for practicing the implementation, testing, and performance analysis of common data structures. The work was completed during an 11-week college course in my Software Development and Business Analytics associate degree program. It begins with foundational linear structures, moves into hash-based lookup and recursive trees, then finishes with a complete browser app that combines multiple structures into a practical application.

The repository is intentionally organized by week so each GitHub-submitted coding assignment can be reviewed independently. Some course weeks included assignments, discussions, or classwork that did not require GitHub submission; this repository focuses on the programming deliverables, data-structure labs, and final project that were built as code artifacts. Browser-based weeks use plain `index.html` files with embedded JavaScript. Node.js-based weeks use standalone `.js` scripts that can be executed directly from the terminal. The final project uses static HTML, CSS, JavaScript, and local assets.

## Repository Structure

```text
Learning Data Structures/
|-- Week 1 - Implementation, Tests, and Benchmarks/
|-- Week 2 - Implementing a Singly Linked List and Comparing Performance/
|-- Week 3 - Doubly Linked List/
|-- Week 4 - Building and Benchmarking a Hash Table /
|-- Week 5 - Building and Benchmarking a Hash Table/
|-- Week 6 - General Trees and Recursion/
|-- Week 7 - Binary Search Trees,  Implementation, Performance Exploration /
|-- Week 8 - Binary Heap and Priority Queue /
`-- Final Project - Data Structures and Algorithms/
```

Each week folder includes an `Objective.txt` file that preserves the assignment prompt. Implementation files are kept inside their matching week folder.

## Prerequisites

- A modern web browser, such as Chrome, Edge, Firefox, or Safari.
- Node.js for terminal-based assignments.
- Python 3 is optional, but useful for serving the final project locally with `python3 -m http.server`.

No package manager install is required for the included coursework. The assignments use plain JavaScript and built-in browser or Node.js APIs.

## How to Run the Work

Browser assignments can be opened directly:

```text
Week 1 - Implementation, Tests, and Benchmarks/index.html
Week 2 - Implementing a Singly Linked List and Comparing Performance/index.html
Week 3 - Doubly Linked List/index.html
Week 4 - Building and Benchmarking a Hash Table /index.html
Final Project - Data Structures and Algorithms/index.html
```

Node.js assignments can be run from their folders:

```bash
cd "Week 5 - Building and Benchmarking a Hash Table"
node --expose-gc test.js
```

```bash
cd "Week 6 - General Trees and Recursion"
node test.js
```

```bash
cd "Week 7 - Binary Search Trees,  Implementation, Performance Exploration "
node test.js
```

```bash
cd "Week 8 - Binary Heap and Priority Queue "
node heapLab.js
```

For the final project, either open `index.html` directly or serve the folder locally:

```bash
cd "Final Project - Data Structures and Algorithms"
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Coursework Overview

This table documents the course weeks represented in this repository. The overall course ran for 11 weeks, and not every course week produced a GitHub-tracked programming folder.

| Week | Topic | Main file(s) | Runtime | Main focus |
| --- | --- | --- | --- | --- |
| Week 1 | Stack, queue, testing, benchmarks | `index.html` | Browser | LIFO, FIFO, ring buffers, assertions, push vs unshift timing |
| Week 2 | Singly linked list | `index.html` | Browser | Node references, prepend, append, insert, remove, find, array comparison |
| Week 3 | Doubly linked list | `index.html` | Browser | Head, tail, next and prev references, front/back operations |
| Week 4 | Hash table | `test.js`, `index.html` | Node.js and browser assets | Separate chaining, hashing, resizing, Map comparison |
| Week 5 | Hash table benchmark | `test.js` | Node.js | Throughput, memory usage, sequential and random key benchmarks |
| Week 6 | General tree and recursion | `test.js` | Node.js | File-system tree modeling, DFS, recursive scanning, CLI interaction |
| Week 7 | Binary search tree | `test.js` | Node.js | Insert, contains, remove, traversal, height, sorted vs random insertion |
| Week 8 | Binary heap and priority queue | `heapLab.js` | Node.js | Heap operations, priority queue abstraction, sorted-array comparison |
| Final | Multi-structure application | `index.html`, `styles.css`, `app.js` | Browser | Practical app using arrays, hash tables, linked lists, and trees |

## Week 1 - Stacks, Queues, Tests, and Benchmarks

Week 1 introduces two foundational linear data structures: a stack and a queue. The assignment implements a stack using JavaScript array operations and a fixed-capacity queue using a ring buffer.

The stack demonstrates last-in, first-out behavior through:

- `push(item)`
- `pop()`
- `peek()`
- `size()`
- `isEmpty()`

The queue demonstrates first-in, first-out behavior without relying on expensive `shift` or `unshift` calls. It maintains:

- `head`
- `tail`
- `count`
- fixed internal storage
- modulo-based wraparound logic

The week also includes console-based tests with `console.assert` and a benchmark comparing `Array.prototype.push` against `Array.prototype.unshift`. This shows why appending to the end of an array is typically O(1), while inserting at the beginning is typically O(n) because existing elements must be moved.

## Week 2 - Singly Linked List and Array Comparison

Week 2 focuses on building a beginner-friendly singly linked list. The implementation uses a node structure where each node stores a value and a reference to the next node.

The singly linked list supports:

- `prepend(value)`
- `append(value)`
- `insertAt(index, value)`
- `removeAt(index)`
- `find(predicateOrValue)`

The assignment also compares linked-list front operations against JavaScript array front operations. This reinforces the trade-off between pointer-based structures and contiguous array storage: linked lists can efficiently insert or remove at the front when references are already known, while arrays are often faster for indexed access but expensive for front insertions and deletions.

## Week 3 - Doubly Linked List

Week 3 extends linked-list work by adding a `prev` reference to each node. This creates a doubly linked list where traversal and updates can reason about both directions.

The implementation tracks:

- `head`
- `tail`
- `length`
- each node's `next` reference
- each node's `prev` reference

The required operations include adding and removing values from both ends of the list. This week emphasizes how node references change during insertion and deletion, especially when the list is empty, has one item, or updates its head and tail pointers.

## Week 4 - Hash Table Implementation and Benchmarking

Week 4 introduces hash tables by building a custom `HashTable` from scratch. The implementation stores key-value pairs inside buckets and uses separate chaining to handle collisions.

The hash table includes:

- `set(key, value)`
- `get(key)`
- `has(key)`
- `delete(key)`
- a deterministic hash function
- collision handling through bucket arrays
- load-factor tracking
- automatic resizing and rehashing

The benchmark compares the custom hash table against JavaScript's built-in `Map` using sequential numeric keys and random string keys. This week connects the internal mechanics of buckets, hash functions, collisions, and resizing to real performance measurements.

## Week 5 - Hash Table Benchmarking and Memory Comparison

Week 5 continues the hash table assignment as a standalone Node.js lab. It keeps the same core structure, but the implementation is organized around terminal execution and clearer benchmarking output.

The week measures:

- set and get throughput for a custom hash table
- set and get throughput for JavaScript `Map`
- behavior with sequential numeric keys
- behavior with random string keys
- memory usage for the custom implementation
- memory usage for `Map`

This assignment highlights the memory-for-speed trade-off behind hash tables. The custom table reserves bucket storage and may hold additional nested arrays for collision chains, while `Map` is a built-in engine-level implementation optimized by JavaScript runtimes.

## Week 6 - General Trees and Recursion

Week 6 moves from linear and hash-based structures into hierarchical data. The assignment models a file system as a general tree using Node.js filesystem access.

The implementation centers on a `FileNode` class that stores:

- file or folder name
- node type
- child nodes

The program recursively scans a selected directory, builds a tree from real folders and files, prints the tree with indentation, and searches by name using depth-first search.

The CLI allows a user to:

- choose or define a starting directory
- scan files and folders
- print the full tree structure
- search for files or folders by name

This week demonstrates why recursion fits tree-shaped data naturally and why traversal strategy matters when searching nested structures.

## Week 7 - Binary Search Trees

Week 7 implements a binary search tree from scratch and uses it to study best-case and worst-case performance.

The binary search tree includes:

- `insert(value)`
- `contains(value)`
- `remove(value)`
- `inOrderTraversal()`
- `preOrderTraversal()`
- `postOrderTraversal()`

The tests cover removal of:

- a leaf node
- a node with one child
- a node with two children

The performance experiment compares a tree built from sorted insertion order against a tree built from random insertion order. Sorted insertion can produce a tall, unbalanced tree that behaves more like a linked list, while random insertion is more likely to produce a shorter tree with better average search behavior.

## Week 8 - Binary Heap and Priority Queue

Week 8 implements a binary heap using an array and then uses that heap to build a priority queue.

The binary heap supports:

- `push(value)`
- `pop()`
- `peek()`

The heap uses array index relationships:

- parent index: `(i - 1) / 2`
- left child index: `2i + 1`
- right child index: `2i + 2`

The priority queue wraps the heap with:

- `enqueue(value)`
- `dequeue()`
- `peek()`

The assignment also implements a naive sorted-array queue, then benchmarks both approaches over random values. This demonstrates why heaps are commonly used for scheduling and priority-based retrieval: they maintain priority order more efficiently than repeatedly sorting an array after each insertion.

## Final Project - Camping Gear Inventory And Packing Planner

The final project is a standalone browser application that demonstrates multiple data structures in a practical interface. It turns camping gear records into a searchable inventory, storage-location map, trip packing list, benchmark demo, and exportable checklist.

The final application uses:

- an array catalog for storing and rendering all gear records
- a custom hash table for faster item lookup
- a linked list for the active trip packing checklist
- a tree for the physical storage hierarchy

The final project includes:

- 75 realistic camping gear records
- shelf, rack, bin, and loose-item storage modeling
- search and filtering controls
- item insertion and deletion
- trip presets for different camping styles
- weight totals, bulk scoring, and packing warnings
- array search vs hash-table lookup benchmarking
- app screenshots and local visual assets
- a written report with complexity analysis
- supporting data, design, attribution, and license documentation

See the full final project documentation in:

```text
Final Project - Data Structures and Algorithms/README.md
```

## Skills Demonstrated

This repository demonstrates:

- implementing data structures from scratch in JavaScript
- writing small behavior checks with `console.assert`
- measuring runtime with `console.time`, `console.timeEnd`, and `performance.now`
- using Big O notation to explain operation complexity
- comparing custom data structures against built-in JavaScript structures
- modeling real-world data with arrays, lists, trees, heaps, and hash tables
- using recursion for hierarchical traversal
- building CLI-based and browser-based coursework deliverables
- documenting implementation choices and trade-offs

## Verification Guide

Use these commands to check the Node.js assignments:

```bash
cd "Week 5 - Building and Benchmarking a Hash Table"
node --check test.js
node --expose-gc test.js
```

```bash
cd "Week 6 - General Trees and Recursion"
node --check test.js
node test.js
```

```bash
cd "Week 7 - Binary Search Trees,  Implementation, Performance Exploration "
node --check test.js
node test.js
```

```bash
cd "Week 8 - Binary Heap and Priority Queue "
node --check heapLab.js
node heapLab.js
```

For browser assignments, open the matching `index.html` file and check the browser console for output, assertions, and benchmark results.

## Documentation Map

- `README.md` - this repository-level overview.
- `Week */Objective.txt` - original weekly assignment prompts.
- `Week 1/index.html` - stack, queue, tests, and benchmark implementation.
- `Week 2/index.html` - singly linked list implementation and performance comparison.
- `Week 3/index.html` - doubly linked list implementation and tests.
- `Week 4/test.js` - hash table implementation and benchmark script.
- `Week 5/test.js` - hash table benchmark and memory comparison script.
- `Week 6/test.js` - recursive file-system tree and CLI.
- `Week 7/test.js` - binary search tree implementation and experiment.
- `Week 8/heapLab.js` - binary heap, priority queue, and sorted-array comparison.
- `Final Project - Data Structures and Algorithms/README.md` - final project overview and usage guide.
- `Final Project - Data Structures and Algorithms/Report.md` - final written report and complexity analysis.
- `Final Project - Data Structures and Algorithms/DATA_GUIDE.md` - guide for replacing sample camping gear data.
- `Final Project - Data Structures and Algorithms/DESIGN.md` - design system notes.
- `Final Project - Data Structures and Algorithms/ATTRIBUTIONS.md` - asset and credit information.

## Final Project README Appendix

The final project is named **Camping Gear Inventory And Packing Planner by mp3li**. It is a standalone browser app for turning scattered camping gear into a searchable storage map, trip-ready packing list, and data-structures demo with real lookup, traversal, benchmark, and export behavior.

<p align="center">
  <img src="Final Project - Data Structures and Algorithms/assets/images/compass-icon.svg" alt="Camping compass icon" width="84" />
</p>

<p align="center">
  <img src="Final Project - Data Structures and Algorithms/assets/images/readme-title.png" alt="Camping Gear Inventory And Packing Planner by mp3li" width="760" />
</p>

<p align="center">
  <img alt="Gear items" src="https://img.shields.io/badge/gear_items-75-aa5215?style=for-the-badge" />
  <img alt="Data structures" src="https://img.shields.io/badge/data_structures-4-66310c?style=for-the-badge" />
  <img alt="Storage model" src="https://img.shields.io/badge/storage-location_tree-151e08?style=for-the-badge" />
  <img alt="Runtime" src="https://img.shields.io/badge/runtime-static_HTML-0b1406?style=for-the-badge" />
</p>

<p align="center">
  <img src="Final Project - Data Structures and Algorithms/assets/images/compassmoving.gif" alt="Interactive compass moving toward the pointer" width="900" />
</p>

### Final Project About

Camping Gear Inventory And Packing Planner by mp3li is a night-camp command center for gear stored across bins, shelves, racks, and loose storage areas. It turns the storage area into a searchable map, turns gear records into trip presets, and turns a packing list into step-by-step retrieval paths.

The app is built to be useful first: find gear, compare seasonal equipment, build a backpacking list, check weight and bulk, and export the final checklist before a trip. Under the hood, those everyday workflows are powered by classic data structures, so the project demonstrates insertion, deletion, searching, traversal, and implementation comparison in a practical context.

### Final Project Features

- 75 realistic camping gear records.
- Editable storage-location name with shelves, racks, bins, and loose large items.
- Search, filter, insert, delete, and traversal behavior.
- Trip packing presets for Summer, Winter, Backpacking, Car Camping, Beach Camping, and Family Camping.
- Packing weight totals, bulk score, and smart warnings.
- Exportable packing checklist.
- Array search vs hash-table lookup benchmark.

### Final Project Data Structures

| Data structure | App use |
| --- | --- |
| Array catalog | Stores and renders all gear records; used as the comparison implementation for search. |
| Custom hash table | Provides fast lookup by combined brand/name key. |
| Linked list | Stores the active trip packing checklist in selected order. |
| Tree | Represents `Location -> Shelf -> Rack -> Bin or Loose -> Item`. |

### Final Project Complexity Summary

| Structure | Insert | Delete | Search | Traversal |
| --- | --- | --- | --- | --- |
| Array catalog | O(1) at end | O(n) | O(n) | O(n) |
| Hash table | O(1) average | O(1) average | O(1) average | O(n) |
| Linked list | O(1) append with tail | O(n) by id | O(n) | O(n) |
| Tree | O(depth) when path is known | O(n) | O(n) | O(n) |

### Final Project Screenshots

<p align="center">
  <img src="Final Project - Data Structures and Algorithms/assets/images/run array vs hash table search.png" alt="Inventory controls showing benchmark results for array search versus hash table lookup" width="780" />
</p>

<p align="center">
  <img src="Final Project - Data Structures and Algorithms/assets/images/midpage.png" alt="Gear inventory and trip packing list with preset buttons, weight, bulk score, and warnings" width="780" />
</p>

<p align="center">
  <img src="Final Project - Data Structures and Algorithms/assets/images/summer camping.png" alt="Summer Camping preset selected with packed items, weight total, bulk score, warnings, and retrieval paths" width="780" />
</p>

<p align="center">
  <img src="Final Project - Data Structures and Algorithms/assets/images/lowermidpage.png" alt="Storage Tree beside Add Gear Item form" width="780" />
</p>

<p align="center">
  <img src="Final Project - Data Structures and Algorithms/assets/images/bottomofpage.png" alt="Add Gear Item form and lower storage tree area" width="780" />
</p>

### Final Project Documentation

- `Final Project - Data Structures and Algorithms/README.md` - public project overview, screenshots, run instructions, and deliverable summary.
- `Final Project - Data Structures and Algorithms/Report.md` - school final report and Big O analysis.
- `Final Project - Data Structures and Algorithms/DATA_GUIDE.md` - guide for replacing the sample camping gear data.
- `Final Project - Data Structures and Algorithms/DESIGN.md` - palette, typography, background, accessibility, and UI conventions.
- `Final Project - Data Structures and Algorithms/ATTRIBUTIONS.md` - Unsplash photo and font credits.
- `Final Project - Data Structures and Algorithms/LICENSE` - MIT project license for the final app.
