const SHELVES = [
  "Comfort / Sleep / Shelter",
  "Toiletries / Health / Safety",
  "Camp Kitchen / Food Prep",
  "Recreation / Fun",
  "Repair / Maintenance / Emergency",
  "Power / Lighting / Navigation",
  "Clothing / Weather Protection"
];

const RACKS = ["Rack 1", "Rack 2", "Rack 3", "Rack 4", "Rack 5"];

const rawGearRows = [
  ["gear-001", "Marmot", "Tungsten 2P Tent", "Comfort / Sleep / Shelter", "3-season", "large", 8, 5.2, 1, "loose", "Rack 1", "Loose"],
  ["gear-002", "MSR", "Access 2 Four-Season Tent", "Comfort / Sleep / Shelter", "4-season", "large", 9, 4.1, 1, "loose", "Rack 1", "Loose"],
  ["gear-003", "Big Agnes", "Copper Spur HV UL2 Tent", "Comfort / Sleep / Shelter", "3-season", "large", 7, 3.1, 1, "loose", "Rack 1", "Loose"],
  ["gear-004", "REI", "Trail Hut 2 Tent", "Comfort / Sleep / Shelter", "3-season", "large", 8, 5.6, 1, "loose", "Rack 1", "Loose"],
  ["gear-005", "Nemo", "Sonic 0 Winter Sleeping Bag", "Comfort / Sleep / Shelter", "winter", "medium", 6, 3.4, 1, "loose", "Rack 2", "Loose"],
  ["gear-006", "Kelty", "Cosmic 20 Sleeping Bag", "Comfort / Sleep / Shelter", "3-season", "medium", 5, 2.9, 1, "loose", "Rack 2", "Loose"],
  ["gear-007", "REI", "Magma 30 Sleeping Bag", "Comfort / Sleep / Shelter", "summer", "medium", 4, 1.4, 2, "loose", "Rack 2", "Loose"],
  ["gear-008", "Therm-a-Rest", "Z Lite Foam Sleeping Pad", "Comfort / Sleep / Shelter", "4-season", "large", 5, 0.9, 2, "loose", "Rack 3", "Loose"],
  ["gear-009", "Nemo", "Roamer Sleeping Pad", "Comfort / Sleep / Shelter", "3-season", "large", 7, 5.5, 2, "loose", "Rack 3", "Loose"],
  ["gear-010", "Sea to Summit", "Aeros Premium Pillow", "Comfort / Sleep / Shelter", "all-season", "small", 1, 0.2, 3, "bin", "Rack 4", "Bin 1"],
  ["gear-011", "PackTowl", "Personal Packable Towel", "Comfort / Sleep / Shelter", "summer", "small", 1, 0.4, 3, "bin", "Rack 4", "Bin 2"],
  ["gear-012", "ENO", "SingleNest Hammock", "Comfort / Sleep / Shelter", "summer", "medium", 3, 1.0, 4, "bin", "Rack 5", "Bin 3"],
  ["gear-013", "Advanced Elements", "Summer Solar Shower Bag", "Toiletries / Health / Safety", "summer", "medium", 3, 1.3, 3, "bin", "Rack 1", "Bin 1"],
  ["gear-014", "Reliance", "Luggable Loo Portable Toilet", "Toiletries / Health / Safety", "all-season", "large", 6, 3.0, 2, "loose", "Rack 1", "Loose"],
  ["gear-015", "Supergoop", "Travel Size Sunscreen SPF 50", "Toiletries / Health / Safety", "summer", "small", 1, 0.2, 2, "bin", "Rack 2", "Bin 2"],
  ["gear-016", "CeraVe", "Travel Size Moisturizing Lotion", "Toiletries / Health / Safety", "all-season", "small", 1, 0.2, 4, "bin", "Rack 2", "Bin 2"],
  ["gear-017", "Sawyer", "Picaridin Bug Spray", "Toiletries / Health / Safety", "summer", "small", 1, 0.3, 2, "bin", "Rack 2", "Bin 3"],
  ["gear-018", "Adventure Medical Kits", "Mountain Series First Aid Kit", "Toiletries / Health / Safety", "all-season", "small", 2, 0.8, 1, "bin", "Rack 3", "Bin 4"],
  ["gear-019", "Compeed", "Blister Care Kit", "Toiletries / Health / Safety", "all-season", "small", 1, 0.1, 2, "bin", "Rack 3", "Bin 4"],
  ["gear-020", "Sea to Summit", "Wilderness Wipes", "Toiletries / Health / Safety", "all-season", "small", 1, 0.4, 3, "bin", "Rack 4", "Bin 5"],
  ["gear-021", "Dr. Bronner's", "Biodegradable Camp Soap", "Toiletries / Health / Safety", "all-season", "small", 1, 0.3, 3, "bin", "Rack 4", "Bin 5"],
  ["gear-022", "Fox 40", "Emergency Whistle", "Toiletries / Health / Safety", "all-season", "small", 1, 0.1, 2, "bin", "Rack 5", "Bin 6"],
  ["gear-023", "Fire Maple", "Propane Portable Stove", "Camp Kitchen / Food Prep", "3-season", "small", 2, 1.2, 2, "bin", "Rack 1", "Bin 1"],
  ["gear-024", "Jetboil", "Propane Portable Stove", "Camp Kitchen / Food Prep", "3-season", "small", 2, 1.0, 2, "bin", "Rack 1", "Bin 1"],
  ["gear-025", "MSR", "PocketRocket Deluxe Stove", "Camp Kitchen / Food Prep", "3-season", "small", 1, 0.2, 2, "bin", "Rack 1", "Bin 1"],
  ["gear-026", "Coleman", "Classic Propane Stove", "Camp Kitchen / Food Prep", "all-season", "large", 7, 11.0, 3, "loose", "Rack 1", "Loose"],
  ["gear-027", "MSR", "IsoPro Fuel Canister", "Camp Kitchen / Food Prep", "3-season", "small", 1, 0.5, 1, "bin", "Rack 1", "Bin 2"],
  ["gear-028", "GSI Outdoors", "Pinnacle Cookset", "Camp Kitchen / Food Prep", "all-season", "medium", 3, 1.6, 2, "bin", "Rack 2", "Bin 3"],
  ["gear-029", "Sea to Summit", "Alpha Light Utensil Set", "Camp Kitchen / Food Prep", "all-season", "small", 1, 0.2, 3, "bin", "Rack 2", "Bin 3"],
  ["gear-030", "Hydro Flask", "Insulated Camp Mug", "Camp Kitchen / Food Prep", "all-season", "small", 1, 0.7, 4, "bin", "Rack 2", "Bin 4"],
  ["gear-031", "Yeti", "Tundra 45 Cooler", "Camp Kitchen / Food Prep", "summer", "large", 10, 23.0, 3, "loose", "Rack 3", "Loose"],
  ["gear-032", "Sawyer", "Squeeze Water Filter", "Camp Kitchen / Food Prep", "3-season", "small", 1, 0.2, 1, "bin", "Rack 4", "Bin 5"],
  ["gear-033", "Katadyn", "BeFree Water Filter", "Camp Kitchen / Food Prep", "3-season", "small", 1, 0.1, 1, "bin", "Rack 4", "Bin 5"],
  ["gear-034", "Reliance", "Aqua-Tainer Water Jug", "Camp Kitchen / Food Prep", "all-season", "large", 6, 2.5, 2, "loose", "Rack 4", "Loose"],
  ["gear-035", "BearVault", "BV500 Bear Canister", "Camp Kitchen / Food Prep", "all-season", "large", 5, 2.6, 2, "loose", "Rack 5", "Loose"],
  ["gear-036", "UCO", "Stormproof Match Kit", "Camp Kitchen / Food Prep", "all-season", "small", 1, 0.2, 1, "bin", "Rack 5", "Bin 6"],
  ["gear-037", "Park & Sun", "Portable Tetherball Set", "Recreation / Fun", "summer", "large", 9, 16.0, 5, "loose", "Rack 1", "Loose"],
  ["gear-038", "Baden", "Volleyball Net Set", "Recreation / Fun", "summer", "large", 8, 12.0, 5, "loose", "Rack 1", "Loose"],
  ["gear-039", "Wilson", "Outdoor Volleyball", "Recreation / Fun", "summer", "medium", 3, 0.6, 5, "bin", "Rack 1", "Bin 1"],
  ["gear-040", "Franklin", "Badminton Set", "Recreation / Fun", "summer", "large", 6, 5.0, 5, "loose", "Rack 2", "Loose"],
  ["gear-041", "Onix", "Pickleball Paddle Set", "Recreation / Fun", "summer", "medium", 3, 1.8, 5, "bin", "Rack 2", "Bin 2"],
  ["gear-042", "Franklin", "Outdoor Pickleballs", "Recreation / Fun", "summer", "small", 1, 0.3, 5, "bin", "Rack 2", "Bin 2"],
  ["gear-043", "Wham-O", "Frisbee Disc", "Recreation / Fun", "summer", "small", 1, 0.4, 5, "bin", "Rack 3", "Bin 3"],
  ["gear-044", "Bicycle", "Waterproof Playing Cards", "Recreation / Fun", "all-season", "small", 1, 0.2, 5, "bin", "Rack 4", "Bin 4"],
  ["gear-045", "JBL", "Clip Camp Speaker", "Recreation / Fun", "summer", "small", 1, 0.5, 5, "bin", "Rack 5", "Bin 5"],
  ["gear-046", "Gear Aid", "Tenacious Tape Tent Repair Kit", "Repair / Maintenance / Emergency", "all-season", "small", 1, 0.2, 2, "bin", "Rack 1", "Bin 1"],
  ["gear-047", "Gear Aid", "Seam Grip Seam Sealer", "Repair / Maintenance / Emergency", "all-season", "small", 1, 0.2, 2, "bin", "Rack 1", "Bin 1"],
  ["gear-048", "Nikwax", "Tent Waterproofing Spray", "Repair / Maintenance / Emergency", "all-season", "small", 2, 0.8, 3, "bin", "Rack 2", "Bin 2"],
  ["gear-049", "Therm-a-Rest", "Sleeping Pad Patch Kit", "Repair / Maintenance / Emergency", "all-season", "small", 1, 0.1, 2, "bin", "Rack 2", "Bin 2"],
  ["gear-050", "Gorilla", "Black Duct Tape Roll", "Repair / Maintenance / Emergency", "all-season", "small", 1, 0.7, 2, "bin", "Rack 3", "Bin 3"],
  ["gear-051", "Atwood Rope", "Paracord 100 Foot Hank", "Repair / Maintenance / Emergency", "all-season", "small", 2, 0.8, 2, "bin", "Rack 3", "Bin 3"],
  ["gear-052", "Leatherman", "Wave Plus Multi-Tool", "Repair / Maintenance / Emergency", "all-season", "small", 1, 0.5, 1, "bin", "Rack 3", "Bin 4"],
  ["gear-053", "MSR", "Groundhog Tent Stakes", "Repair / Maintenance / Emergency", "all-season", "small", 1, 0.4, 2, "bin", "Rack 4", "Bin 5"],
  ["gear-054", "NOCO", "Boost Plus Car Jump Starter", "Repair / Maintenance / Emergency", "all-season", "medium", 3, 2.4, 2, "bin", "Rack 5", "Bin 6"],
  ["gear-055", "Viair", "Portable Tire Inflator", "Repair / Maintenance / Emergency", "all-season", "medium", 4, 4.5, 3, "loose", "Rack 5", "Loose"],
  ["gear-056", "Black Diamond", "Spot 400 Headlamp", "Power / Lighting / Navigation", "all-season", "small", 1, 0.2, 1, "bin", "Rack 1", "Bin 1"],
  ["gear-057", "Petzl", "Actik Core Headlamp", "Power / Lighting / Navigation", "all-season", "small", 1, 0.2, 1, "bin", "Rack 1", "Bin 1"],
  ["gear-058", "Nitecore", "NU25 Headlamp", "Power / Lighting / Navigation", "all-season", "small", 1, 0.1, 1, "bin", "Rack 1", "Bin 1"],
  ["gear-059", "Goal Zero", "Lighthouse 600 Lantern", "Power / Lighting / Navigation", "all-season", "medium", 3, 1.1, 2, "bin", "Rack 2", "Bin 2"],
  ["gear-060", "BioLite", "AlpenGlow 500 Lantern", "Power / Lighting / Navigation", "all-season", "medium", 2, 0.8, 2, "bin", "Rack 2", "Bin 2"],
  ["gear-061", "Anker", "PowerCore 20000 Battery Bank", "Power / Lighting / Navigation", "all-season", "small", 1, 0.8, 2, "bin", "Rack 3", "Bin 3"],
  ["gear-062", "Goal Zero", "Nomad 20 Solar Charger", "Power / Lighting / Navigation", "summer", "medium", 3, 2.3, 3, "bin", "Rack 3", "Bin 4"],
  ["gear-063", "Garmin", "eTrex 32x GPS", "Power / Lighting / Navigation", "all-season", "small", 1, 0.3, 2, "bin", "Rack 4", "Bin 5"],
  ["gear-064", "Suunto", "MC-2 Compass", "Power / Lighting / Navigation", "all-season", "small", 1, 0.2, 1, "bin", "Rack 4", "Bin 5"],
  ["gear-065", "Motorola", "Talkabout Two-Way Radios", "Power / Lighting / Navigation", "all-season", "small", 2, 0.9, 3, "bin", "Rack 5", "Bin 6"],
  ["gear-066", "Patagonia", "Torrentshell Rain Jacket", "Clothing / Weather Protection", "3-season", "medium", 2, 0.8, 2, "bin", "Rack 1", "Bin 1"],
  ["gear-067", "Frogg Toggs", "Ultra-Lite Rain Poncho", "Clothing / Weather Protection", "summer", "small", 1, 0.5, 3, "bin", "Rack 1", "Bin 1"],
  ["gear-068", "Smartwool", "Merino Base Layer Top", "Clothing / Weather Protection", "winter", "small", 1, 0.5, 2, "bin", "Rack 2", "Bin 2"],
  ["gear-069", "Darn Tough", "Thermal Hiking Socks", "Clothing / Weather Protection", "winter", "small", 1, 0.2, 2, "bin", "Rack 2", "Bin 2"],
  ["gear-070", "Outdoor Research", "Insulated Gloves", "Clothing / Weather Protection", "winter", "small", 1, 0.3, 2, "bin", "Rack 2", "Bin 3"],
  ["gear-071", "Carhartt", "Knit Beanie", "Clothing / Weather Protection", "winter", "small", 1, 0.2, 3, "bin", "Rack 2", "Bin 3"],
  ["gear-072", "Sunday Afternoons", "Ultra Adventure Sun Hat", "Clothing / Weather Protection", "summer", "small", 1, 0.2, 3, "bin", "Rack 3", "Bin 4"],
  ["gear-073", "Crocs", "Classic Camp Shoes", "Clothing / Weather Protection", "summer", "medium", 3, 0.9, 4, "loose", "Rack 4", "Loose"],
  ["gear-074", "Teva", "Hurricane Water Shoes", "Clothing / Weather Protection", "summer", "medium", 2, 1.2, 4, "bin", "Rack 4", "Bin 5"],
  ["gear-075", "Arc'teryx", "Cerium Packable Down Jacket", "Clothing / Weather Protection", "winter", "small", 2, 0.8, 2, "bin", "Rack 5", "Bin 6"]
];

let gearItems = rawGearRows.map(([id, brand, name, category, season, size, bulk, weight, priority, storageType, rack, container]) => ({
  id,
  brand,
  name,
  category,
  shelf: `${category} Shelf`,
  season,
  size,
  bulk,
  weight,
  priority,
  storageType,
  rack,
  container,
  packed: false
}));

class GearHashTable {
  constructor(size = 211) {
    this.buckets = Array.from({ length: size }, () => []);
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i += 1) {
      hashValue = (hashValue * 31 + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashValue;
  }

  set(key, value) {
    const bucket = this.buckets[this.hash(key)];
    const existing = bucket.find((entry) => entry.key === key);
    if (existing) {
      existing.value = value;
      return;
    }
    bucket.push({ key, value });
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    const entry = bucket.find((item) => item.key === key);
    return entry ? entry.value : null;
  }

  delete(key) {
    const bucket = this.buckets[this.hash(key)];
    const index = bucket.findIndex((entry) => entry.key === key);
    if (index >= 0) {
      bucket.splice(index, 1);
      return true;
    }
    return false;
  }
}

class PackingNode {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class PackingLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(item) {
    if (this.contains(item.id)) return;
    const node = new PackingNode(item);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  }

  contains(id) {
    let current = this.head;
    while (current) {
      if (current.item.id === id) return true;
      current = current.next;
    }
    return false;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toArray() {
    const items = [];
    let current = this.head;
    while (current) {
      items.push(current.item);
      current = current.next;
    }
    return items;
  }
}

class TreeNode {
  constructor(label, type = "group") {
    this.label = label;
    this.type = type;
    this.children = [];
  }

  child(label, type = "group") {
    let node = this.children.find((item) => item.label === label);
    if (!node) {
      node = new TreeNode(label, type);
      this.children.push(node);
    }
    return node;
  }
}

const packingList = new PackingLinkedList();
let gearTable = new GearHashTable();
let activePreset = null;
let packingBeforePreset = [];
let storageLocationName = "Garage";

const presets = {
  "Summer Camping": ["3-season", "summer", "all-season"],
  "Winter Camping": ["winter", "4-season", "all-season"],
  Backpacking: ["3-season", "summer", "all-season"],
  "Car Camping": ["3-season", "summer", "all-season", "4-season"],
  "Beach Camping": ["summer", "all-season"],
  "Family Camping": ["3-season", "summer", "all-season"]
};

const presetRules = {
  "Summer Camping": { maxBulk: 10, includeFun: true },
  "Winter Camping": { maxBulk: 10, requireWinter: true },
  Backpacking: { maxBulk: 4, size: ["small", "medium"] },
  "Car Camping": { maxBulk: 10, includeFun: true },
  "Beach Camping": { maxBulk: 7, includeFun: true, preferSummer: true },
  "Family Camping": { maxBulk: 10, includeFun: true }
};

const requiredCategories = [
  "Comfort / Sleep / Shelter",
  "Camp Kitchen / Food Prep",
  "Toiletries / Health / Safety",
  "Power / Lighting / Navigation"
];

const els = {
  totalItems: document.getElementById("totalItems"),
  searchInput: document.getElementById("searchInput"),
  shelfFilter: document.getElementById("shelfFilter"),
  seasonFilter: document.getElementById("seasonFilter"),
  sizeFilter: document.getElementById("sizeFilter"),
  addShelf: document.getElementById("addShelf"),
  inventoryList: document.getElementById("inventoryList"),
  inventoryCount: document.getElementById("inventoryCount"),
  storageTree: document.getElementById("storageTree"),
  presetButtons: document.getElementById("presetButtons"),
  packingList: document.getElementById("packingList"),
  packedCount: document.getElementById("packedCount"),
  packedWeight: document.getElementById("packedWeight"),
  packedBulk: document.getElementById("packedBulk"),
  warningList: document.getElementById("warningList"),
  exportOutput: document.getElementById("exportOutput"),
  benchmarkResult: document.getElementById("benchmarkResult"),
  addGearForm: document.getElementById("addGearForm"),
  compass: document.getElementById("compass"),
  locationNameInput: document.getElementById("locationNameInput"),
  storageLocationLabel: document.getElementById("storageLocationLabel")
};

function keyFor(item) {
  return `${item.brand} ${item.name}`.toLowerCase();
}

function displayKey(item) {
  return `${item.brand} ${item.name}`;
}

function locationPath(item) {
  const container = item.storageType === "loose" ? "Loose" : item.container;
  return `${storageLocationName} -> ${item.shelf} -> ${item.rack} -> ${container}`;
}

function rebuildHashTable() {
  gearTable = new GearHashTable();
  gearItems.forEach((item) => gearTable.set(keyFor(item), item));
}

function buildStorageTree(items) {
  const root = new TreeNode(storageLocationName, "location");
  SHELVES.forEach((category) => {
    const shelfNode = root.child(`${category} Shelf`, "shelf");
    RACKS.forEach((rack) => shelfNode.child(rack, "rack"));
  });

  items.forEach((item) => {
    const shelf = root.child(item.shelf, "shelf");
    const rack = shelf.child(item.rack, "rack");
    const container = rack.child(item.storageType === "loose" ? "Loose" : item.container, item.storageType);
    container.child(displayKey(item), "item");
  });

  return root;
}

function renderTree(node) {
  const childHtml = node.children
    .sort((a, b) => a.label.localeCompare(b.label, undefined, { numeric: true }))
    .map(renderTree)
    .join("");
  return `<div class="tree-node"><span class="tree-label">${node.label}</span>${childHtml}</div>`;
}

function populateSelects() {
  const shelfOptions = SHELVES.map((name) => `${name} Shelf`);
  shelfOptions.forEach((shelf) => {
    els.shelfFilter.insertAdjacentHTML("beforeend", `<option value="${shelf}">${shelf}</option>`);
    els.addShelf.insertAdjacentHTML("beforeend", `<option>${shelf}</option>`);
  });

  ["summer", "winter", "3-season", "4-season", "all-season"].forEach((season) => {
    els.seasonFilter.insertAdjacentHTML("beforeend", `<option value="${season}">${season}</option>`);
  });

  ["small", "medium", "large"].forEach((size) => {
    els.sizeFilter.insertAdjacentHTML("beforeend", `<option value="${size}">${size}</option>`);
  });
}

function filteredItems() {
  const query = els.searchInput.value.trim().toLowerCase();
  return gearItems.filter((item) => {
    const matchesQuery = !query || keyFor(item).includes(query) || item.category.toLowerCase().includes(query);
    const matchesShelf = els.shelfFilter.value === "all" || item.shelf === els.shelfFilter.value;
    const matchesSeason = els.seasonFilter.value === "all" || item.season === els.seasonFilter.value;
    const matchesSize = els.sizeFilter.value === "all" || item.size === els.sizeFilter.value;
    return matchesQuery && matchesShelf && matchesSeason && matchesSize;
  });
}

function renderInventory() {
  const items = filteredItems();
  els.totalItems.textContent = gearItems.length;
  els.inventoryCount.textContent = `${items.length} items shown`;
  els.inventoryList.innerHTML = items.map((item) => `
    <article class="gear-card">
      <h3>${displayKey(item)}</h3>
      <div class="gear-meta">
        <span class="tag">${item.season}</span>
        <span class="tag">${item.size}</span>
        <span class="tag">${item.weight} lb</span>
        <span class="tag">bulk ${item.bulk}</span>
        <span class="tag">priority ${item.priority}</span>
      </div>
      <p class="location">${locationPath(item)}</p>
      <div class="card-actions">
        <button type="button" data-pack="${item.id}">Pack</button>
        <button type="button" data-delete="${item.id}">Delete</button>
      </div>
    </article>
  `).join("");
}

function renderStorage() {
  els.storageTree.innerHTML = renderTree(buildStorageTree(gearItems));
}

function renderPresets() {
  els.presetButtons.innerHTML = Object.keys(presets)
    .map((name) => {
      const isActive = activePreset === name;
      return `<button type="button" class="${isActive ? "selected" : ""}" data-preset="${name}" aria-pressed="${isActive}">${name}</button>`;
    })
    .join("");
}

function renderPacking() {
  const items = packingList.toArray();
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  const totalBulk = items.reduce((sum, item) => sum + item.bulk, 0);
  els.packedCount.textContent = items.length;
  els.packedWeight.textContent = `${totalWeight.toFixed(1)} lb`;
  els.packedBulk.textContent = totalBulk;
  els.packingList.innerHTML = items.map((item) => `
    <li>
      <strong>${displayKey(item)}</strong><br>
      ${item.category} | ${item.season} | ${item.weight} lb | bulk ${item.bulk}<br>
      ${locationPath(item)}
    </li>
  `).join("");
  renderWarnings(items);
}

function renderWarnings(items) {
  const warnings = [];
  const categories = new Set(items.map((item) => item.category));
  requiredCategories.forEach((category) => {
    if (!categories.has(category)) warnings.push(`Missing ${category} gear for a complete trip setup.`);
  });
  if (items.some((item) => item.season === "winter") && !items.some((item) => item.season === "4-season" || item.name.toLowerCase().includes("winter"))) {
    warnings.push("Winter gear is selected, but no 4-season shelter or winter sleeping item is packed.");
  }
  if (items.some((item) => item.name.toLowerCase().includes("stove")) && !items.some((item) => item.name.toLowerCase().includes("fuel"))) {
    warnings.push("A stove is packed, but no fuel canister is packed.");
  }
  if (items.some((item) => item.name.toLowerCase().includes("tent")) && !items.some((item) => item.name.toLowerCase().includes("stakes"))) {
    warnings.push("A tent is packed, but tent stakes are not packed.");
  }
  if (items.length > 0 && !items.some((item) => item.name.toLowerCase().includes("first aid"))) {
    warnings.push("No first aid kit is packed.");
  }
  els.warningList.innerHTML = warnings.map((warning) => `<div class="warning">${warning}</div>`).join("");
}

function packItem(id) {
  const item = gearItems.find((entry) => entry.id === id);
  if (item) {
    activePreset = null;
    packingBeforePreset = [];
    item.packed = true;
    packingList.append(item);
    renderPresets();
    renderPacking();
  }
}

function deleteItem(id) {
  const item = gearItems.find((entry) => entry.id === id);
  gearItems = gearItems.filter((entry) => entry.id !== id);
  if (item) gearTable.delete(keyFor(item));
  rebuildHashTable();
  renderAll();
}

function applyPreset(name) {
  if (activePreset === name) {
    packingList.clear();
    packingBeforePreset
      .map((id) => gearItems.find((item) => item.id === id))
      .filter(Boolean)
      .forEach((item) => packingList.append(item));
    activePreset = null;
    packingBeforePreset = [];
    renderPresets();
    renderPacking();
    return;
  }

  if (!activePreset) {
    packingBeforePreset = packingList.toArray().map((item) => item.id);
  }

  activePreset = name;
  const seasons = presets[name];
  const rules = presetRules[name];
  packingList.clear();
  const candidates = gearItems
    .filter((item) => seasons.includes(item.season))
    .filter((item) => item.bulk <= rules.maxBulk)
    .filter((item) => !rules.size || rules.size.includes(item.size))
    .sort((a, b) => a.priority - b.priority || a.bulk - b.bulk);

  requiredCategories.forEach((category) => {
    const item = candidates.find((candidate) => candidate.category === category);
    if (item) packingList.append(item);
  });

  if (rules.requireWinter) {
    candidates.filter((item) => item.season === "winter" || item.season === "4-season").slice(0, 4).forEach((item) => packingList.append(item));
  }

  if (rules.preferSummer) {
    candidates.filter((item) => item.season === "summer").slice(0, 5).forEach((item) => packingList.append(item));
  }

  if (rules.includeFun) {
    candidates.filter((item) => item.category === "Recreation / Fun").slice(0, 3).forEach((item) => packingList.append(item));
  }

  candidates.slice(0, 12).forEach((item) => packingList.append(item));
  renderPresets();
  renderPacking();
}

function exportChecklist() {
  const items = packingList.toArray();
  const lines = [
    "Camping Gear Packing Checklist",
    "Generated by Camping Gear Inventory And Packing Planner by mp3li",
    ""
  ];
  items.forEach((item, index) => {
    lines.push(`${index + 1}. [ ] ${displayKey(item)}`);
    lines.push(`   Category: ${item.category}`);
    lines.push(`   Season: ${item.season}`);
    lines.push(`   Weight: ${item.weight} lb | Bulk: ${item.bulk}`);
    lines.push(`   Location: ${locationPath(item)}`);
    lines.push("");
  });
  els.exportOutput.value = lines.join("\n");
  els.exportOutput.select();
  navigator.clipboard?.writeText(els.exportOutput.value).catch(() => {});
}

function runBenchmark() {
  const target = "jetboil propane portable stove";
  const iterations = 50000;
  const startArray = performance.now();
  for (let i = 0; i < iterations; i += 1) {
    gearItems.find((item) => keyFor(item) === target);
  }
  const arrayTime = performance.now() - startArray;

  const startHash = performance.now();
  for (let i = 0; i < iterations; i += 1) {
    gearTable.get(target);
  }
  const hashTime = performance.now() - startHash;

  els.benchmarkResult.innerHTML = `
    <strong>Search target:</strong> Jetboil Propane Portable Stove<br>
    <strong>Iterations:</strong> ${iterations.toLocaleString()}<br>
    <strong>Array catalog:</strong> ${arrayTime.toFixed(3)} ms, O(n) search<br>
    <strong>Hash table catalog:</strong> ${hashTime.toFixed(3)} ms, O(1) average search<br>
    The array scans item by item. The hash table hashes the combined brand/name key and checks one bucket.
  `;
}

function addGear(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const storageType = form.get("storageType");
  const item = {
    id: `gear-${Date.now()}`,
    brand: form.get("brand").trim(),
    name: form.get("name").trim(),
    category: form.get("category").trim(),
    shelf: form.get("shelf"),
    season: form.get("season"),
    size: form.get("size"),
    storageType,
    rack: form.get("rack"),
    container: storageType === "loose" ? "Loose" : (form.get("container").trim() || "Bin New"),
    weight: Number(form.get("weight")),
    bulk: Number(form.get("bulk")),
    priority: Number(form.get("priority")),
    packed: false
  };
  gearItems.push(item);
  gearTable.set(keyFor(item), item);
  event.currentTarget.reset();
  renderAll();
}

function bindEvents() {
  [els.searchInput, els.shelfFilter, els.seasonFilter, els.sizeFilter].forEach((control) => {
    control.addEventListener("input", renderInventory);
  });

  els.locationNameInput.addEventListener("input", () => {
    storageLocationName = els.locationNameInput.value.trim() || "Garage";
    els.storageLocationLabel.textContent = storageLocationName;
    renderInventory();
    renderStorage();
    renderPacking();
  });

  els.inventoryList.addEventListener("click", (event) => {
    const packId = event.target.dataset.pack;
    const deleteId = event.target.dataset.delete;
    if (packId) packItem(packId);
    if (deleteId) deleteItem(deleteId);
  });

  els.presetButtons.addEventListener("click", (event) => {
    if (event.target.dataset.preset) applyPreset(event.target.dataset.preset);
  });

  document.getElementById("runBenchmark").addEventListener("click", runBenchmark);
  document.getElementById("clearPacking").addEventListener("click", () => {
    activePreset = null;
    packingBeforePreset = [];
    packingList.clear();
    renderPresets();
    renderPacking();
  });
  document.getElementById("exportPacking").addEventListener("click", exportChecklist);
  els.addGearForm.addEventListener("submit", addGear);
  bindCompass();
}

function bindCompass() {
  if (!els.compass) return;
  let currentAngle = -28;

  const pointCompass = (event) => {
    const rect = els.compass.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const targetAngle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180 / Math.PI + 90;
    const shortestTurn = ((targetAngle - currentAngle + 540) % 360) - 180;
    currentAngle += shortestTurn;
    els.compass.style.setProperty("--needle-angle", `${currentAngle}deg`);
  };

  window.addEventListener("pointermove", pointCompass);
  window.addEventListener("pointerleave", () => {
    currentAngle = -28;
    els.compass.style.setProperty("--needle-angle", "-28deg");
  });
}

function renderAll() {
  renderInventory();
  renderStorage();
  renderPacking();
}

populateSelects();
rebuildHashTable();
renderPresets();
bindEvents();
renderAll();
