class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedBag {
  constructor() {
    this.count = 0;
    this.first = null;
  }

  isEmpty() {
    return this.count === 0;
  }

  add(item) {
    const oldFirst = this.first;
    this.first = new Node();
    this.first.item = item;
    this.first.next = oldFirst;
    this.count += 1;
  }

  size() {
    return this.count;
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

export { LinkedBag };
