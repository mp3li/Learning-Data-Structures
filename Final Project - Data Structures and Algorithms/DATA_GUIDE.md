# Data Guide

This guide explains how to replace the sample camping gear data with your own gear. You do not need to change the app logic if you keep the same data format.

## Where The Data Lives

Open `app.js` and find:

```js
const rawGearRows = [
```

Each row in that list is one camping gear item.

## Row Format

Each row uses this order:

```js
["id", "brand", "name", "category", "season", "size", bulk, weight, priority, "storageType", "rack", "container"]
```

Example:

```js
["gear-024", "Jetboil", "Propane Portable Stove", "Camp Kitchen / Food Prep", "3-season", "small", 2, 1.0, 2, "bin", "Rack 1", "Bin 1"]
```

## Field Meanings

| Field | Meaning |
| --- | --- |
| `id` | A unique identifier. Do not reuse the same id for two items. |
| `brand` | The company or maker, such as Jetboil, MSR, REI, or Coleman. |
| `name` | The item name, such as Propane Portable Stove. |
| `category` | The storage shelf group. |
| `season` | When the item is useful. |
| `size` | Physical size of the item. |
| `bulk` | How much space the item takes, from 1 to 10. |
| `weight` | Item weight in pounds. |
| `priority` | Packing importance, where 1 is most important and 5 is optional. |
| `storageType` | Use `bin` for small contained items or `loose` for large shelf items. |
| `rack` | Rack level, from `Rack 1` to `Rack 5`. |
| `container` | Bin name such as `Bin 3`, or `Loose` for loose items. |

## Valid Categories

Use one of these categories:

```text
Comfort / Sleep / Shelter
Toiletries / Health / Safety
Camp Kitchen / Food Prep
Recreation / Fun
Repair / Maintenance / Emergency
Power / Lighting / Navigation
Clothing / Weather Protection
```

The app automatically adds `Shelf` to the category when building the storage tree.

## Valid Seasons

```text
summer
winter
3-season
4-season
all-season
```

## Valid Sizes

```text
small
medium
large
```

## Storage Rules

Small items usually go in bins:

```js
["gear-100", "Black Diamond", "Spot 400 Headlamp", "Power / Lighting / Navigation", "all-season", "small", 1, 0.2, 1, "bin", "Rack 1", "Bin 1"]
```

Large items usually stay loose on a rack:

```js
["gear-101", "Coleman", "Oversized Camp Chair", "Comfort / Sleep / Shelter", "summer", "large", 8, 9.5, 4, "loose", "Rack 3", "Loose"]
```

## Common Mistakes To Avoid

- Do not remove commas between fields.
- Keep text values inside quotes.
- Do not reuse the same `id`.
- Use numbers without quotes for `bulk`, `weight`, and `priority`.
- Use `Loose` as the container when `storageType` is `loose`.
- Use exact category names if you want filters and shelves to stay organized.
