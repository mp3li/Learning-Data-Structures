'use strict';

class HashTable {
  constructor(initialCapacity = 16, maxLoadFactor = 0.75) {
    this.buckets = Array.from({ length: initialCapacity }, () => []);
    this.size = 0;
    this.maxLoadFactor = maxLoadFactor;
  }

  _hash(key) {
    const str = String(key);
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    return hash % this.buckets.length;
  }

  _loadFactor() {
    return this.size / this.buckets.length;
  }

  _resize(newCapacity) {
    const oldBuckets = this.buckets;
    this.buckets = Array.from({ length: newCapacity }, () => []);
    const oldSize = this.size;
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }

    this.size = oldSize;
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size += 1;

    if (this._loadFactor() > this.maxLoadFactor) {
      this._resize(this.buckets.length * 2);
    }
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size -= 1;
        return true;
      }
    }

    return false;
  }
}

function randomString(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function buildSequentialNumericKeys(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function buildRandomStringKeys(count) {
  const keys = [];
  for (let i = 0; i < count; i += 1) {
    keys.push(randomString(12) + i);
  }
  return keys;
}

function measureOpsPerSecond(label, operationCount, fn) {
  const start = performance.now();
  fn();
  const elapsedMs = performance.now() - start;
  const opsPerSecond = operationCount / (elapsedMs / 1000);

  return {
    label,
    elapsedMs,
    opsPerSecond,
  };
}

function benchmarkDataset(datasetLabel, keys) {
  const values = keys.map((_, i) => i * 2);
  const operationCount = keys.length * 2;

  const customTable = new HashTable();
  const customSetGet = measureOpsPerSecond(
    `${datasetLabel} - Custom HashTable`,
    operationCount,
    () => {
      for (let i = 0; i < keys.length; i += 1) {
        customTable.set(keys[i], values[i]);
      }
      for (let i = 0; i < keys.length; i += 1) {
        customTable.get(keys[i]);
      }
    }
  );

  const jsMap = new Map();
  const mapSetGet = measureOpsPerSecond(
    `${datasetLabel} - JavaScript Map`,
    operationCount,
    () => {
      for (let i = 0; i < keys.length; i += 1) {
        jsMap.set(keys[i], values[i]);
      }
      for (let i = 0; i < keys.length; i += 1) {
        jsMap.get(keys[i]);
      }
    }
  );

  return {
    customSetGet,
    mapSetGet,
  };
}

function measureMemory(label, builder) {
  if (global.gc) {
    global.gc();
  }
  const start = process.memoryUsage().heapUsed;
  const structure = builder();
  if (global.gc) {
    global.gc();
  }
  const end = process.memoryUsage().heapUsed;

  return {
    label,
    bytesUsed: Math.max(0, end - start),
    structure,
  };
}

function formatBytes(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function printBenchmarkResult(result) {
  console.log(`\n${result.label}`);
  console.log(`Elapsed: ${result.elapsedMs.toFixed(2)} ms`);
  console.log(`Throughput: ${Math.round(result.opsPerSecond).toLocaleString()} ops/sec`);
}

function run() {
  const totalKeys = 100000;
  const sequentialKeys = buildSequentialNumericKeys(totalKeys);
  const randomKeys = buildRandomStringKeys(totalKeys);

  const sequentialResults = benchmarkDataset('Sequential Numeric Keys', sequentialKeys);
  const randomResults = benchmarkDataset('Random String Keys', randomKeys);

  console.log('Part 3: Throughput Results (set + get)');
  printBenchmarkResult(sequentialResults.customSetGet);
  printBenchmarkResult(sequentialResults.mapSetGet);
  printBenchmarkResult(randomResults.customSetGet);
  printBenchmarkResult(randomResults.mapSetGet);

  const memoryKeys = buildRandomStringKeys(50000);
  const customMemory = measureMemory('Custom HashTable', () => {
    const table = new HashTable();
    for (let i = 0; i < memoryKeys.length; i += 1) {
      table.set(memoryKeys[i], i);
    }
    return table;
  });

  const mapMemory = measureMemory('JavaScript Map', () => {
    const map = new Map();
    for (let i = 0; i < memoryKeys.length; i += 1) {
      map.set(memoryKeys[i], i);
    }
    return map;
  });

  console.log('\nPart 4: Memory Usage Comparison');
  console.log(`Custom HashTable heap increase: ${formatBytes(customMemory.bytesUsed)}`);
  console.log(`JavaScript Map heap increase: ${formatBytes(mapMemory.bytesUsed)}`);

  console.log('\nPart 4 Notes:');
  console.log('- The custom table uses bucket arrays plus entry arrays, which adds extra structural overhead.');
  console.log('- A larger bucket count lowers collision costs, but increases memory usage.');
  console.log('- Hash tables trade memory for speed by allocating spare bucket capacity to keep lookups close to O(1).');
}

run();
