/* eslint-disable no-param-reassign */
export class DoubleNode<T> {
  public prev: DoubleNode<T>;

  public next: DoubleNode<T>;

  public item: T;

  constructor(item: T) {
    this.prev = null;
    this.next = null;
    this.item = item;
  }
}
export class DoubleLinkedList<T> {
  public first: DoubleNode<T>;

  public last: DoubleNode<T>;

  constructor() {
    this.first = null;
    this.last = null;
  }

  static insertBefore<K>(
    list: DoubleLinkedList<K>,
    node: DoubleNode<K>,
    insert: DoubleNode<K>
  ): boolean {
    if (list == null || list.first == null || node == null) {
      return false;
    }

    if (list.first === node) {
      insert.next = list.first;
      list.first.prev = insert;
      list.first = insert;
      return true;
    }

    insert.next = node;
    node.prev.next = insert;
    insert.prev = node.prev;
    node.prev = insert;

    return true;
  }

  static insertAfter<K>(
    list: DoubleLinkedList<K>,
    node: DoubleNode<K>,
    insert: DoubleNode<K>
  ): boolean {
    if (list == null || list.first == null || node == null) {
      return false;
    }

    if (list.last === node) {
      insert.prev = list.last;
      list.last.next = insert;
      list.last = insert;
      return true;
    }

    insert.next = node.next;
    node.next = insert;
    insert.prev = node;
    insert.next.prev = insert;
    return true;
  }

  static shift<K>(list: DoubleLinkedList<K>): K {
    if (list.first == null) {
      return null;
    }

    if (list.first === list.last) {
      const res = list.first;
      list.first = null;
      list.last = null;
      return res.item;
    }

    const res = list.first;
    list.first.next.prev = null;
    list.first = list.first.next;
    return res.item;
  }

  static unshift<K>(list: DoubleLinkedList<K>, item: K): void {
    if (list == null || item == null) {
      return;
    }

    const node = new DoubleNode(item);
    if (list.first == null) {
      list.first = node;
      list.last = node;
    }

    node.next = list.first;
    list.first.prev = node;
    list.first = node;
  }

  static append<K>(list: DoubleLinkedList<K>, item: K): void {
    const node = new DoubleNode(item);

    if (list.first == null) {
      list.first = node;
      list.last = node;
      return;
    }
    node.prev = list.last;
    list.last.next = node;
    list.last = node;
  }

  static deleteLast<K>(list: DoubleLinkedList<K>): void {
    if (list.first === list.last) {
      list.first = null;
      list.last = null;
    }
    const pre = list.last.prev;
    pre.next = null;
    list.last.prev = null;
    list.last = pre;
  }

  static delete<K>(list: DoubleLinkedList<K>, node: DoubleNode<K>): void {
    if (list.first == null) {
      return;
    }
    if (list.first === node) {
      DoubleLinkedList.shift(list);
      return;
    }
    if (list.last === node) {
      DoubleLinkedList.deleteLast(list);
      return;
    }
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
