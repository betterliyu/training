class BST {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

function insert(x, tree) {
  if (!tree) {
    tree = new BST();
    tree.data = x;
    tree.visited = 0;
    return tree;
  } else {
    while (tree) {
      if (x < tree.data) {
        if (tree.leftChild) {
          tree = tree.leftChild
        } else {
          const n = new BST();
          n.data = x;
          n.visited = 0;
          tree.leftChild = n;
          return;
        }
      } else if (x > tree.data) {
        if (tree.rightChild) {
          tree = tree.rightChild
        } else {
          const n = new BST();
          n.data = x;
          n.visited = 0;
          tree.rightChild = n;
          return;
        }
      } else {
        return -1;
      }
    }
  }
}

function check(x, tree) {
  if (!tree) {
    return null;
  }
  while (tree) {
    if (x > tree.data) {
      if (tree.visited == 1) {
        tree = tree.rightChild;
      } else {
        return -1;
      }
    } else if (x < tree.data) {
      if (tree.visited == 1) {
        tree = tree.leftChild;
      } else {
        return -1;
      }
    } else {
      tree.visited = 1;
      return 1;
    }
  }
}

function isEqual(list1, list2) {
  const tree1 = new BST();
  tree1.data = list1[0];
  for (let i = 1; i < list1.length; i++) {
    insert(list1[i], tree1)
  }


  for (let i = 0; i < list2.length; i++) {
    const n = list2[i];
    const t = check(n, tree1);
    if (t == null || t == -1) {
      return false;
    }
  }
  return true;
}


console.log(isEqual([3, 2, 1, 4], [3, 2, 4, 1]))