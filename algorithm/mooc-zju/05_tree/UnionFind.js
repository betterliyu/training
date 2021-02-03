function create(size) {
  const list = [];
  for (let i = 0; i < size; i++) {
    list[i] = -1;
  }
  return list;
}

function find(list, item) {
  let x = item;
  while (list[x] >= 0) {
    x = list[x]
  }
  return x;
}

function union(list, a, b) {
  const aParent = find(list, a);
  const bParent = find(list, b);
  if (aParent != bParent) {
    list[bParent] = aParent;
  }
}


function find_compress(list, item) {
  let x = item;
  while (list[x] >= 0) {
    if(list[list[x]] != -1) {
      list[x] = list[list[x]]
    }
    x = list[x]
  }
  return x;
}

module.exports = {
  create,
  find,
  find_compress,
  union
}