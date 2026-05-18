'use strict';

const { performance } = require('perf_hooks');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  contains(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }

      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  remove(value) {
    const removeNode = (node, target) => {
      if (!node) {
        return null;
      }

      if (target < node.value) {
        node.left = removeNode(node.left, target);
        return node;
      }

      if (target > node.value) {
        node.right = removeNode(node.right, target);
        return node;
      }

      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const successor = this.findMin(node.right);
      node.value = successor.value;
      node.right = removeNode(node.right, successor.value);
      return node;
    };

    this.root = removeNode(this.root, value);
  }

  findMin(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  inOrderTraversal() {
    const values = [];

    const visit = (node) => {
      if (!node) {
        return;
      }
      visit(node.left);
      values.push(node.value);
      visit(node.right);
    };

    visit(this.root);
    return values;
  }

  preOrderTraversal() {
    const values = [];

    const visit = (node) => {
      if (!node) {
        return;
      }
      values.push(node.value);
      visit(node.left);
      visit(node.right);
    };

    visit(this.root);
    return values;
  }

  postOrderTraversal() {
    const values = [];

    const visit = (node) => {
      if (!node) {
        return;
      }
      visit(node.left);
      visit(node.right);
      values.push(node.value);
    };

    visit(this.root);
    return values;
  }

  height() {
    if (!this.root) {
      return 0;
    }

    const queue = [{ node: this.root, depth: 1 }];
    let maxDepth = 0;

    while (queue.length > 0) {
      const { node, depth } = queue.shift();
      maxDepth = Math.max(maxDepth, depth);

      if (node.left) {
        queue.push({ node: node.left, depth: depth + 1 });
      }

      if (node.right) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }

    return maxDepth;
  }
}

function buildTree(values) {
  const tree = new BinarySearchTree();
  for (const value of values) {
    tree.insert(value);
  }
  return tree;
}

function shuffle(values) {
  const copy = [...values];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function measureTime(label, fn) {
  const start = performance.now();
  fn();
  const elapsedMs = performance.now() - start;

  return {
    label,
    elapsedMs,
  };
}

function printTraversal(label, values) {
  console.log(`${label}: ${values.join(', ')}`);
}

function runBasicFunctionalityTests() {
  console.log('Part 1 and 2: Basic BST Functionality');

  const tree = buildTree([50, 30, 70, 20, 40, 60, 80, 65]);

  console.log(`Contains 60: ${tree.contains(60)}`);
  console.log(`Contains 100: ${tree.contains(100)}`);
  printTraversal('In-order traversal', tree.inOrderTraversal());
  printTraversal('Pre-order traversal', tree.preOrderTraversal());
  printTraversal('Post-order traversal', tree.postOrderTraversal());

  const leafTree = buildTree([50, 30, 70, 20, 40, 60, 80]);
  leafTree.remove(20);
  printTraversal('\nRemove leaf node 20', leafTree.inOrderTraversal());

  const oneChildTree = buildTree([50, 30, 70, 20, 40, 60, 80, 65]);
  oneChildTree.remove(60);
  printTraversal('Remove node 60 with one child', oneChildTree.inOrderTraversal());

  const twoChildrenTree = buildTree([50, 30, 70, 20, 40, 60, 80]);
  twoChildrenTree.remove(70);
  printTraversal('Remove node 70 with two children', twoChildrenTree.inOrderTraversal());
}

function runInsertionOrderExperiment() {
  console.log('\nPart 3: Insertion Order Experiment');

  const totalValues = 10000;
  const sortedValues = Array.from({ length: totalValues }, (_, i) => i + 1);
  const randomValues = shuffle(sortedValues);

  const sortedInsert = measureTime('Sorted insert time', () => buildTree(sortedValues));
  const randomInsert = measureTime('Random insert time', () => buildTree(randomValues));

  const sortedTree = buildTree(sortedValues);
  const randomTree = buildTree(randomValues);
  const searchValues = [1, Math.floor(totalValues / 2), totalValues];

  const sortedSearch = measureTime('Sorted search time', () => {
    for (let i = 0; i < 10000; i += 1) {
      sortedTree.contains(searchValues[i % searchValues.length]);
    }
  });

  const randomSearch = measureTime('Random search time', () => {
    for (let i = 0; i < 10000; i += 1) {
      randomTree.contains(searchValues[i % searchValues.length]);
    }
  });

  console.log(`Sorted tree height: ${sortedTree.height()}`);
  console.log(`Random tree height: ${randomTree.height()}`);
  console.log(`${sortedInsert.label}: ${sortedInsert.elapsedMs.toFixed(2)} ms`);
  console.log(`${randomInsert.label}: ${randomInsert.elapsedMs.toFixed(2)} ms`);
  console.log(`${sortedSearch.label}: ${sortedSearch.elapsedMs.toFixed(2)} ms`);
  console.log(`${randomSearch.label}: ${randomSearch.elapsedMs.toFixed(2)} ms`);

  console.log('\nPart 4: Analysis');
  console.log('Sorted insertion creates a tall, unbalanced BST because each value is added to the right of the previous value.');
  console.log('Random insertion usually creates a shorter tree, so insert and search operations visit fewer nodes.');
  console.log('That is why the sorted tree behaves closer to worst-case O(n), while the random tree is closer to average-case O(log n).');
}

function run() {
  runBasicFunctionalityTests();
  runInsertionOrderExperiment();
}

run();
