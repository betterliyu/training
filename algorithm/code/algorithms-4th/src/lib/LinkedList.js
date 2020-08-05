class LinkedList {
  constructor(first) {
    this.first = first;
  }

  find(i) {
    if (this.first === null) return null;
    let cur = this.first;
    let pos = 1;
    while (cur.next != null) {
      if (pos === i) {
        return cur;
      }
      pos += 1;
      cur = cur.next;
    }

    return null;
  }

  append(node) {
    if (this.first == null) {
      this.first = node;
      return;
    }

    let last = this.first;

    while (last.next != null) {
      last = last.next;
    }
    last.next = node;
  }

  delete(k) {
    if (this.first == null) {
      return null;
    }

    if (k === 1) {
      const res = this.first;
      this.first = this.first.next;
      return res;
    }

    let cur = this.first;
    let pos = 2;

    while (cur.next != null) {
      if (pos === k) {
        const res = cur.next;
        cur.next = cur.next.next;
        return res;
      }
      pos += 1;
      cur = cur.next;
    }

    return null;
  }

  length() {
    if (this.first == null) {
      return 0;
    }

    let cur = this.first;
    let pos = 1;

    while (cur.next != null) {
      pos += 1;
      cur = cur.next;
    }
    return pos;
  }

  print() {
    let cur = this.first;
    while (cur.next != null) {
      console.log(`${cur.item} `);
      cur = cur.next;
    }
  }
}

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;
exports.Node = Node;
