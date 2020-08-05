class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedStack {
  constructor() {
    this.first = null;
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    if (this.first) {
      return this.first.item;
    }
    return null;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    const res = this.first.item;
    this.first = this.first.next;
    this.count -= 1;
    return res;
  }

  push(item) {
    const newNode = new Node(item);
    newNode.next = this.first;
    this.first = newNode;
    this.count += 1;
  }

  size() {
    return this.count;
  }

  toString() {
    let res = '';
    let cur = this.first;
    while (cur && cur.next) {
      res += `${cur.item} `;
      cur = cur.next;
    }
    return res.trim();
  }
}

module.exports = {
  LinkedStack,
  Node,
};
