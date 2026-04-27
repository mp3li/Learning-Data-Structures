const { performance } = require('perf_hooks');

class HashTable {
  constructor(initialCapacity = 16, loadFactorThreshold = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactorThreshold = loadFactorThreshold;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  hash(key) {
    let hashValue = 0;
    const keyStr = String(key);
    for (let i = 0; i < keyStr.length; i++) {
      hashValue += keyStr.charCodeAt(i);
    }
    return hashValue % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.size++;
    if (this.size / this.capacity > this.loadFactorThreshold) {
      this.resize(this.capacity * 2);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  resize(newCapacity) {
    const oldBuckets = this.buckets;
    this.capacity = newCapacity;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}

// Benchmark function
function benchmark(data, operations) {
  const hashTable = new HashTable();
  const map = new Map();

  // Warm up
  for (let i = 0; i < 1000; i++) {
    hashTable.set(i, i);
    map.set(i, i);
  }
  hashTable.size = 0; // Reset size after warm up
  hashTable.buckets = new Array(hashTable.capacity).fill(null).map(() => []);
  map.clear();

  // Measure HashTable set
  let start = performance.now();
  for (let i = 0; i < operations; i++) {
    hashTable.set(data[i % data.length], i);
  }
  let hashTableSetTime = performance.now() - start;

  // Measure Map set
  start = performance.now();
  for (let i = 0; i < operations; i++) {
    map.set(data[i % data.length], i);
  }
  let mapSetTime = performance.now() - start;

  // Measure HashTable get
  start = performance.now();
  for (let i = 0; i < operations; i++) {
    hashTable.get(data[i % data.length]);
  }
  let hashTableGetTime = performance.now() - start;

  // Measure Map get
  start = performance.now();
  for (let i = 0; i < operations; i++) {
    map.get(data[i % data.length]);
  }
  let mapGetTime = performance.now() - start;

  return {
    hashTableSet: hashTableSetTime,
    mapSet: mapSetTime,
    hashTableGet: hashTableGetTime,
    mapGet: mapGetTime
  };
}

// Test data
const sequentialKeys = Array.from({ length: 10000 }, (_, i) => i);
const randomKeys = Array.from({ length: 10000 }, () => Math.random().toString(36).substring(7));

const operations = 100000;

console.log('Benchmarking with sequential keys:');
const seqResults = benchmark(sequentialKeys, operations);
console.log(`HashTable set: ${seqResults.hashTableSet.toFixed(2)} ms`);
console.log(`Map set: ${seqResults.mapSet.toFixed(2)} ms`);
console.log(`HashTable get: ${seqResults.hashTableGet.toFixed(2)} ms`);
console.log(`Map get: ${seqResults.mapGet.toFixed(2)} ms`);

console.log('\nBenchmarking with random keys:');
const randResults = benchmark(randomKeys, operations);
console.log(`HashTable set: ${randResults.hashTableSet.toFixed(2)} ms`);
console.log(`Map set: ${randResults.mapSet.toFixed(2)} ms`);
console.log(`HashTable get: ${randResults.hashTableGet.toFixed(2)} ms`);
console.log(`Map get: ${randResults.mapGet.toFixed(2)} ms`);

// Memory notes
console.log('\nMemory Usage Notes:');
console.log('Hash tables use extra space for buckets and linked lists to handle collisions.');
console.log('This trades memory for speed by allowing average O(1) operations instead of O(n) in worst case.');
console.log('JavaScript\'s Map is optimized and may use less memory for small datasets.');

// Basic functionality test
console.log('\nBasic functionality test:');
const ht = new HashTable();
ht.set('a', 1);
ht.set('b', 2);
console.log('get a:', ht.get('a')); // 1
console.log('has b:', ht.has('b')); // true
console.log('delete a:', ht.delete('a')); // true
console.log('get a after delete:', ht.get('a')); // null
console.log('has a after delete:', ht.has('a')); // false