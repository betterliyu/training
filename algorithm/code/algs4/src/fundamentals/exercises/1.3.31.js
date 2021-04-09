/* eslint-disable no-param-reassign */
class DoubleNode {
  constructor(item) {
    this.prev = null;
    this.next = null;
    this.item = item;
  }
}
class DoubleList {
  constructor() {
    this.first = null;
    this.last = null;
  }
}

DoubleList.insertBefore = (list, node, insert) => {
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
};

DoubleList.insertAfter = (list, node, insert) => {
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
};

DoubleList.shift = (list) => {
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
};

DoubleList.unshift = (list, item) => {
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
};

DoubleList.append = (list, item) => {
  const node = new DoubleNode(item);

  if (list.first == null) {
    list.first = node;
    list.last = node;
    return;
  }
  node.prev = list.last;
  list.last.next = node;
  list.last = node;
};

DoubleList.deleteLast = (list) => {
  if (list.first === list.last) {
    list.first = null;
    list.last = null;
  }
  const pre = list.last.prev;
  pre.next = null;
  list.last.prev = null;
  list.last = pre;
};

DoubleList.delete = (list, node) => {
  if (list.first == null) {
    return;
  }
  if (list.first === node) {
    DoubleList.shift(list);
    return;
  }
  if (list.last === node) {
    DoubleList.deleteLast(list);
    return;
  }
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.prev = null;
  node.next = null;
};

module.exports = {
  DoubleNode,
  DoubleList,
};
