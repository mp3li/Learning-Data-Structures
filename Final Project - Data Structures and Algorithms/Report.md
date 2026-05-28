# Final Project Report

## Project Overview

**Camping Gear Inventory And Packing Planner by mp3li** is a standalone browser application that manages camping gear stored in a garage. The app tracks brand, item name, category, season, size, bulk, weight, priority, shelf, rack, container, and packed status. It demonstrates multiple data structures and compares different implementations for searching gear.

## Data Structures Used

### Array Catalog

The array catalog stores all gear records in a simple list. It is easy to traverse and display, but searching requires checking items one by one until the target is found.

Main use:

- Render all gear.
- Filter by shelf, season, and size.
- Compare search performance against the hash table.

### Custom Hash Table

The custom hash table stores gear by a combined brand/name key, such as `jetboil propane portable stove`. It uses buckets and a string hash function. Collisions are handled by storing multiple entries in the same bucket.

Main use:

- Fast lookup by brand and item name.
- Demonstrating average-case O(1) search.
- Comparing against the array catalog.

### Linked List

The packing checklist is implemented as a linked list. Each node stores one gear item and a pointer to the next node. The list preserves the selected packing order and can be traversed to render the checklist or export it.

Main use:

- Active trip packing list.
- Appending gear selected manually or through presets.
- Traversing the packing list for export and weight totals.

### Tree

The garage storage system is represented as a tree:

```text
Garage -> Shelf -> Rack -> Bin or Loose -> Gear Item
```

Main use:

- Represent storage hierarchy.
- Show how items are physically organized.
- Traverse the garage layout visually.

## Operations Demonstrated

| Operation | Where It Appears |
| --- | --- |
| Insertion | Add Gear Item form inserts into the array catalog, hash table, and storage tree render. |
| Deletion | Delete button removes a gear item from the catalog and hash table. |
| Searching | Search box, filters, and hash-table benchmark. |
| Traversal | Inventory render, packing-list render, exported checklist, and garage storage tree. |

## Implementation Comparison

The app compares two implementations for finding the same gear item:

1. **Array catalog search:** loops through the array and checks each item.
2. **Hash-table lookup:** hashes the combined brand/name key and checks the matching bucket.

The benchmark searches for:

```text
Jetboil Propane Portable Stove
```

The array search is O(n) because it may need to inspect every item. The hash table is O(1) average case because the hash function maps the key to a bucket.

## Complexity Analysis

| Data Structure | Operation | Big O Time | Big O Memory |
| --- | --- | --- | --- |
| Array catalog | Insert at end | O(1) | O(n) |
| Array catalog | Delete by id | O(n) | O(n) |
| Array catalog | Search by brand/name | O(n) | O(n) |
| Array catalog | Traverse all items | O(n) | O(n) |
| Hash table | Insert | O(1) average | O(n) |
| Hash table | Delete | O(1) average | O(n) |
| Hash table | Search | O(1) average | O(n) |
| Hash table | Worst-case search | O(n) | O(n) |
| Linked list | Append with tail pointer | O(1) | O(n) |
| Linked list | Search duplicate item | O(n) | O(n) |
| Linked list | Traverse packing list | O(n) | O(n) |
| Tree | Insert known path | O(depth) | O(n) |
| Tree | Traverse garage layout | O(n) | O(n) |
| Tree | Search without index | O(n) | O(n) |

## Learning Outcomes Mapping

- **Show how data structures are represented in the computer:** The app represents an array catalog, hash table buckets, linked-list nodes, and tree nodes in source code.
- **Manipulate data structures with basic operations:** Users can insert, delete, search, filter, and traverse gear.
- **Compare implementations:** The app compares array search and hash-table lookup.
- **Evaluate complexity:** This report explains time and memory complexity with Big O notation.

## Conclusion

This project uses a realistic camping gear inventory to demonstrate how data structures affect storage, lookup, traversal, and performance. The hash table is best for fast item lookup, the array is simple for rendering and comparison, the linked list models the packing checklist, and the tree clearly represents the garage storage hierarchy.
