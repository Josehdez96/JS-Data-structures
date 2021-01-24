class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const olderTop = this.top;
      this.top = newNode;
      this.top.next = olderTop;
    }
    this.length++;
    return this;
  }

  pop() {
    const elementPoped = this.top.value;

    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return elementPoped;
  }
}

const myStack = new Stack();
