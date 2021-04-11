class Node<T> {
  public item: T;

  public next: Node<T>;

  constructor(item?: T) {
    this.item = item;
    this.next = null;
  }
}
export class LinkedBag<T> implements Iterable<T> {
  private count: number;

  public first: Node<T>;

  constructor() {
    this.count = 0;
    this.first = null;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  add(item: T): void {
    const oldFirst = this.first;
    this.first = new Node<T>();
    this.first.item = item;
    this.first.next = oldFirst;
    this.count += 1;
  }

  size(): number {
    return this.count;
  }

  [Symbol.iterator](): Iterator<T> {
    let cur = this.first;
    return {
      next(): IteratorResult<T> {
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
