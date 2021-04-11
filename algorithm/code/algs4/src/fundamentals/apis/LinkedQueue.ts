export class Node<T> {
  public item: T;

  public next: Node<T>;

  constructor(item?: T) {
    this.item = item;
    this.next = null;
  }
}

export class LinkedQueue<T> implements Iterable<T> {
  public first: Node<T>;

  public count: number;

  constructor() {
    this.first = null;
    this.count = 0;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  dequeue(): T {
    if (!this.first) {
      return null;
    }
    const res = this.first.item;
    this.first = this.first.next;
    this.count -= 1;
    return res;
  }

  enqueue(item: T): void {
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
