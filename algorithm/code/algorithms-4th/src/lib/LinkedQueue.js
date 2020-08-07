class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.first = null;
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const res = this.first.item;
    this.first = this.first.next;
    this.count -= 1;
    return res;
  }

  enqueue(item) {
    const newNode = new Node(item);

    if (this.first == null) {
      this.first = newNode;
      this.count += 1;
      return;
    }

    let last = this.first;
    while (last.next) {
      last = last.next;
    }
    last.next = newNode;
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

  [Symbol.iterator]() {
    const self = this;
    let cur = self.first;
    return {
      next() {
        if (cur) {
          const value = cur.item;
          cur = cur.next;
          return { done: false, value };
        }
        return { done: true };
      },
    };
  }
}

module.exports = {
  LinkedQueue,
};
