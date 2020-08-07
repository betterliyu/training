class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class CircleQueue {
  constructor() {
    this.last = null;
  }

  isEmpty() {
    return this.last == null;
  }

  dequeue() {
    if (this.last == null) {
      return null;
    }
    if (this.last.next === this.last) {
      const res = this.last.item;
      this.last = null;
      return res;
    }

    const res = this.last.next.item;
    const first = this.last.next;
    this.last.next = first.next;
    first.next = null;
    return res;
  }

  enqueue(item) {
    const newNode = new Node(item);

    if (this.last == null) {
      this.last = newNode;
      newNode.next = newNode;
      return;
    }

    newNode.next = this.last.next;
    this.last.next = newNode;
    this.last = newNode;
  }

  [Symbol.iterator]() {
    const self = this;
    let first = null;
    if (self.last) {
      first = self.last.next;
    }
    let cur = first;
    let outputFirst = false;

    return {
      next() {
        if (cur) {
          if (outputFirst && cur === first) {
            return { done: true };
          }
          if (cur === first) {
            outputFirst = true;
          }

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
  CircleQueue,
};
