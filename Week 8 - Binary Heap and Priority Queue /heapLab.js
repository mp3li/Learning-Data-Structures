'use strict';

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  push(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  pop() {
    if (this.values.length === 0) {
      return undefined;
    }

    const root = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown(0);
    }

    return root;
  }

  peek() {
    return this.values[0];
  }

  bubbleUp(index) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.values[parentIndex] <= this.values[currentIndex]) {
        break;
      }

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  bubbleDown(index) {
    let currentIndex = index;

    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      let smallestIndex = currentIndex;

      if (
        leftChildIndex < this.values.length
        && this.values[leftChildIndex] < this.values[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.values.length
        && this.values[rightChildIndex] < this.values[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex === currentIndex) {
        break;
      }

      this.swap(currentIndex, smallestIndex);
      currentIndex = smallestIndex;
    }
  }

  swap(firstIndex, secondIndex) {
    [this.values[firstIndex], this.values[secondIndex]] = [
      this.values[secondIndex],
      this.values[firstIndex],
    ];
  }
}

class PriorityQueue {
  constructor() {
    this.heap = new BinaryHeap();
  }

  enqueue(value) {
    this.heap.push(value);
  }

  dequeue() {
    return this.heap.pop();
  }

  peek() {
    return this.heap.peek();
  }
}

class SortedArrayQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value) {
    this.values.push(value);
    this.values.sort((a, b) => a - b);
  }

  dequeue() {
    return this.values.shift();
  }

  peek() {
    return this.values[0];
  }
}

function createRandomValues(count) {
  const values = [];

  for (let i = 0; i < count; i += 1) {
    values.push(Math.floor(Math.random() * count * 10));
  }

  return values;
}

function testQueue(label, QueueClass, values) {
  console.time(label);

  const queue = new QueueClass();

  for (const value of values) {
    queue.enqueue(value);
  }

  for (let i = 0; i < values.length; i += 1) {
    queue.dequeue();
  }

  console.timeEnd(label);
}

function comparePerformance() {
  const testSizes = [1000, 5000, 10000];

  for (const size of testSizes) {
    const values = createRandomValues(size);

    console.log(`\nTesting ${size} values`);
    testQueue('Heap-based Priority Queue', PriorityQueue, values);
    testQueue('Sorted Array Queue', SortedArrayQueue, values);
  }
}

comparePerformance();
