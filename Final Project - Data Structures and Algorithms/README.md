# Camping Gear Inventory And Packing Planner by mp3li

A standalone browser app for organizing camping gear in a garage shelf, rack, bin, and loose-item storage system. The project was built for a data structures and algorithms final project, but it is also documented so other people can replace the sample data with their own camping gear.

## Features

- 75 realistic sample camping gear items.
- Garage-only storage model with shelves, racks, bins, and loose large items.
- Custom hash table for fast gear lookup.
- Array-based catalog for comparison with the hash table.
- Linked list for the active packing checklist.
- Tree traversal for the garage storage layout.
- Search, filter, insert, delete, and traversal behavior.
- Trip presets for Summer Camping, Winter Camping, Backpacking, Car Camping, Beach Camping, and Family Camping.
- Packing weight total, bulk score, and smart warnings.
- Exportable packing checklist with retrieval paths.
- Built with no package manager, no framework, and no server requirement.

## Quick Start

You can open `index.html` directly in a browser.

For the most consistent local testing, run:

```bash
cd "/Users/stellar/School/SOFT144 - Data Structures/Learning Data Structures/Final Project - Data Structures and Algorithms"
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Browser Test Checklist

- Confirm the app loads with the camping background, dark overlay, glass panels, palette, and Digital Dream fonts.
- Confirm 75 gear items appear.
- Search for `Jetboil Propane Portable Stove`.
- Add a new item and confirm it appears in the inventory and storage tree.
- Delete an item and confirm it disappears.
- Use each trip preset and confirm the packing list updates.
- Confirm total weight and bulk score update.
- Confirm smart warnings appear for missing essentials or season conflicts.
- Export the packing checklist and confirm it includes item names and retrieval paths.
- Run the array vs hash table comparison and confirm timing and Big O results display.

## App Sections

- **Inventory Controls:** Search, filter, clear packing, and run the benchmark.
- **Gear Inventory:** Shows all matching gear cards and supports pack/delete actions.
- **Trip Packing List:** Uses a linked list to preserve selected packing order.
- **Garage Storage Tree:** Shows `Garage -> Shelf -> Rack -> Bin/Loose -> Item`.
- **Add Gear Item:** Demonstrates insertion into the catalog and storage model.

## Customizing The Gear Data

The sample gear data lives in `app.js` in the `rawGearRows` array. To use your own gear, replace the sample rows with your own rows using the same order:

```js
["gear-001", "Brand", "Item Name", "Category", "season", "size", bulk, weight, priority, "storageType", "Rack 1", "Bin 1"]
```

Read `DATA_GUIDE.md` for a plain-language field-by-field guide, valid values, examples, and common editing mistakes to avoid.

## Final Project Requirement Checklist

- **Source code of the application:** `index.html`, `styles.css`, `app.js`, and local assets.
- **Short written report:** `Report.md`.
- **Complexity analysis:** `Report.md`, with a summary in this README.
- **Comparison of implementations:** Array catalog search vs custom hash-table lookup.
- **At least two data structures:** Hash table, array catalog, linked list, and tree.
- **Insertion, deletion, searching, traversal:** Implemented in the app.
- **Clear representation:** The app visually shows the inventory, storage tree, packing list, and benchmark.

## Big O Summary

| Structure | Main Use | Insert | Delete | Search | Traversal |
| --- | --- | --- | --- | --- | --- |
| Array catalog | Comparison implementation | O(1) at end | O(n) | O(n) | O(n) |
| Hash table | Fast item lookup | O(1) average | O(1) average | O(1) average | O(n) |
| Linked list | Packing checklist | O(1) append with tail | O(n) if removing by id | O(n) | O(n) |
| Tree | Garage storage layout | O(depth) when path is known | O(n) | O(n) | O(n) |

## Design System

The app uses a night camping dashboard style:

- `#aa5215` campfire orange
- `#66310c` bark brown
- `#151e08` deep forest green
- `#0b1406` near-black pine green
- `#04040c` night sky black

Typography:

- `DIGITALDREAMFATNARROW.ttf` for titles and headings.
- `DIGITALDREAMSKEWNARROW.ttf` for body and interface text.

See `DESIGN.md` for detailed styling and accessibility notes.

## Credits And Licenses

- Photo by Muhammad Masood on Unsplash, used under the Unsplash License.
- Digital Dream fonts by pizzadude.dk. These font files are from the free commercial-use font set; keep `LICENSES/pizzadude.dk License.txt` with the project.

See `ATTRIBUTIONS.md` for full attribution notes.
