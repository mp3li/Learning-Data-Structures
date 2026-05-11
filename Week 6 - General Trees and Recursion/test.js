'use strict';

const fs = require('fs/promises');
const path = require('path');
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

class FileNode {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  print(indentLevel = 0) {
    const indent = '  '.repeat(indentLevel);
    const label = this.type === 'folder' ? `[Folder] ${this.name}` : `[File] ${this.name}`;
    console.log(`${indent}${label}`);

    for (const child of this.children) {
      child.print(indentLevel + 1);
    }
  }

  find(targetName) {
    if (this.name === targetName) {
      return this;
    }

    for (const child of this.children) {
      const match = child.find(targetName);
      if (match) {
        return match;
      }
    }

    return null;
  }
}

async function buildTree(startPath) {
  const stats = await fs.lstat(startPath);
  const type = stats.isDirectory() ? 'folder' : 'file';
  const node = new FileNode(path.basename(startPath), type);

  if (type === 'folder') {
    const entries = await fs.readdir(startPath, { withFileTypes: true });

    for (const entry of entries) {
      const childPath = path.join(startPath, entry.name);
      const childNode = await buildTree(childPath);
      node.addChild(childNode);
    }
  }

  return node;
}

async function promptForDirectory(rl) {
  while (true) {
    const answer = await rl.question(
      'Enter a starting directory path (leave blank for the current working directory): '
    );
    const chosenPath = answer.trim() || process.cwd();
    const resolvedPath = path.resolve(chosenPath);

    try {
      const stats = await fs.lstat(resolvedPath);
      if (!stats.isDirectory()) {
        console.log('That path is not a directory. Please try again.');
        continue;
      }
      return resolvedPath;
    } catch (error) {
      console.log(`Unable to access that directory: ${error.message}`);
    }
  }
}

async function runCli() {
  const rl = readline.createInterface({ input, output });
  let currentDirectory = await promptForDirectory(rl);
  let rootNode = null;

  console.log(`Current directory: ${currentDirectory}`);

  while (true) {
    console.log('\nChoose an option:');
    console.log('1. Choose a different starting directory');
    console.log('2. Scan folders and files');
    console.log('3. Print the full tree structure');
    console.log('4. Search for a file or folder by name');
    console.log('5. Exit');

    const choice = (await rl.question('Enter your choice: ')).trim();

    if (choice === '1') {
      currentDirectory = await promptForDirectory(rl);
      rootNode = null;
      console.log(`Current directory: ${currentDirectory}`);
      continue;
    }

    if (choice === '2') {
      try {
        rootNode = await buildTree(currentDirectory);
        console.log('Scan complete.');
      } catch (error) {
        console.log(`Scan failed: ${error.message}`);
      }
      continue;
    }

    if (choice === '3') {
      if (!rootNode) {
        console.log('Please scan the directory first.');
        continue;
      }
      rootNode.print();
      continue;
    }

    if (choice === '4') {
      if (!rootNode) {
        console.log('Please scan the directory first.');
        continue;
      }

      const targetName = (await rl.question('Enter the file or folder name to search for: ')).trim();
      if (!targetName) {
        console.log('Please enter a name to search for.');
        continue;
      }

      const match = rootNode.find(targetName);
      if (match) {
        console.log(`Found: [${match.type}] ${match.name}`);
      } else {
        console.log('No matching file or folder was found.');
      }
      continue;
    }

    if (choice === '5') {
      rl.close();
      return;
    }

    console.log('Invalid choice. Please enter 1, 2, 3, 4, or 5.');
  }
}

runCli().catch((error) => {
  console.error(`Unexpected error: ${error.message}`);
  process.exitCode = 1;
});
