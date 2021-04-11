class Node<T> {
  public item: T;

  public next: Node<T>;

  constructor(item?: T) {
    this.item = item;
    this.next = null;
  }
}

export class LinkedStack<T> implements Iterable<T> {
  public first: Node<T>;

  public count: number;

  constructor() {
    this.first = null;
    this.count = 0;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  peek(): T {
    if (this.first) {
      return this.first.item;
    }
    return null;
  }

  pop(): T {
    if (!this.first) {
      return null;
    }
    const res = this.first.item;
    this.first = this.first.next;
    this.count -= 1;
    return res;
  }

  push(item: T): void {
    const newNode = new Node(item);
    newNode.next = this.first;
    this.first = newNode;
    this.count += 1;
  }

  size(): number {
    return this.count;
  }

  toString(): string {
    let res = '';
    let cur = this.first;
    while (cur && cur.next) {
      res += `${cur.item} `;
      cur = cur.next;
    }
    return res.trim();
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
