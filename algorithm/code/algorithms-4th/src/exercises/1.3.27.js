class Node {
  constructor(v) {
    this.next = null;
    this.item = v;
  }
}

const max = (node) => {
  if (node === null) {
    return 0;
  }

  let cur = node;
  let maxKey = node;
  while (cur.next) {
    if (maxKey.key < cur.key) {
      maxKey = cur;
    }
    cur = cur.next;
  }
  return maxKey.item;
};
