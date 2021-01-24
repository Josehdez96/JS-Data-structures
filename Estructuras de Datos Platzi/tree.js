//     10
//  4      20
// 2  8  17  170

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this; // Rompe el while
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this; // Rompe el while
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        console.log(currentNode);
        return this;
      }

      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          console.error("search number does not exist");
          return this;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          console.error("search number does not exist");
          return this;
        }
      }
    }
  }
}

let myTree = new BinarySeachTree();
myTree.insert(10);
myTree.insert(4);
myTree.insert(20);
myTree.insert(2);
myTree.insert(17);
myTree.insert(180);
myTree.search(10);
