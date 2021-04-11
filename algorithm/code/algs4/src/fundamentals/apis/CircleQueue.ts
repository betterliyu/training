class Node<T> {
  public item: T;

  public next: Node<T>;

  constructor(item?: T) {
    this.item = item;
    this.next = null;
  }
}
export class CircleQueue<T> implements Iterable<T> {
  public last: Node<T>;

  constructor() {
    this.last = null;
  }

  isEmpty(): boolean {
    return this.last == null;
  }

  dequeue(): T {
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

  enqueue(item: T): void {
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

  [Symbol.iterator](): Iterator<T> {
    let first = null;
    if (this.last) {
      first = this.last.next;
    }
    let cur = first;
    let outputFirst = false;

    return {
      next() {
        if (cur) {
          if (outputFirst && cur === first) {
            return { done: true, value: undefined };
          }
          if (cur === first) {
            outputFirst = true;
          }

          const value = cur.item;
          cur = cur.next;
          return { done: false, value };
        }
        return { done: true, value: undefined };
      },
    };
  }
}
