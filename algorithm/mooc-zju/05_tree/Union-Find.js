function find(list, item) {
  let itemNode = item;
  while (list[itemNode] >= 0) {
    itemNode = list[itemNode]
  }
  return itemNode;
}

function union(list, a, b) {
  const aParent = find(list, a);
  const bParent = find(list, b);
  if (aParent != bParent) {
    list[aParent] = bParent;
  }
}