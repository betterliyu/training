const max = (first) => {
  if (first === null) {
    return 0;
  }
  let cur = first;
  let maxNode = first;
  while (cur) {
    if (maxNode.item < cur.item) {
      maxNode = cur;
    }
    cur = cur.next;
  }
  return maxNode.item;
};

module.exports = {
  max,
};
