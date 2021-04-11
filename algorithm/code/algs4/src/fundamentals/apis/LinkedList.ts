export class Node<T> {
  public item: T;

  public next: Node<T>;

  constructor(item?: T) {
    this.item = item;
    this.next = null;
  }
}

export class LinkedList<T> implements Iterable<T> {
  public first: Node<T>;

  constructor() {
    this.first = null;
  }

  findIndex(i: number): Node<T> {
    let cur = this.first;
    let pos = 1;
    while (cur && pos !== i) {
      pos += 1;
      cur = cur.next;
    }

    return cur;
  }

  append(item: T): void {
    if (this.first == null) {
      this.first = new Node<T>(item);
      return;
    }

    let last = this.first;

    while (last.next != null) {
      last = last.next;
    }
    last.next = new Node(item);
  }

  delete(k: number): T {
    if (this.first == null) {
      return null;
    }

    if (k === 1) {
      const res = this.first;
      this.first = this.first.next;
      return res.item;
    }

    let cur = this.first;
    let pos = 2;

    while (cur.next != null) {
      if (pos === k) {
        const res = cur.next;
        cur.next = cur.next.next;
        return res.item;
      }
      pos += 1;
      cur = cur.next;
    }

    return null;
  }

  size(): number {
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

  [Symbol.iterator](): Iterator<T> {
    let cur = this.first;
    return {
      next() {
        if (cur) {
          const value = cur.item;
          cur = cur.next;
          return { done: false, value };
        }
        return { done: true, value: undefined };
      },
    };
  }
}
