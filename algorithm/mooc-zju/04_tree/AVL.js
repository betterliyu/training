class AVLNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.height = -1;
  }
}

function getHeight(tree) {
  if (!tree) return -1;
  // const l = getHeight(tree.leftChild);
  // const r = getHeight(tree.rightChild);
  return tree.height;
}

function singleRightRotation(a) {
  let b = a.rightChild;
  a.rightChild = b.leftChild;
  b.leftChild = a;
  a.height = Math(getHeight(a.leftChild), getHeight(a.rightChild)) + 1;
  b.height = Math(getHeight(b.leftChild), getHeight(b.rightChild)) + 1;
  return b;
}

function singleLeftRotation(a) {
  let b = a.leftChild;
  a.leftChild = b.rightChild;
  b.rightChild = a;
  a.height = Math(getHeight(a.leftChild), getHeight(a.rightChild)) + 1;
  b.height = Math(getHeight(b.leftChild), getHeight(b.rightChild)) + 1;
  return b;
}

function doubleLeftRightRotation(a) {
  a.leftChild = singleRightRotation(a.leftChild);
  return singleLeftRotation(a);
}

function doubleRightLeftRotation(a) {
  a.rightChild = singleLeftRotation(a.rightChild);
  return singleRightRotation(a);
}

function insert(x, tree) {
  if (!tree) {
    tree = new AVLNode();
    tree.data = x;
    tree.height = 0
    return tree;
  }
  if (x < tree.data) {
    tree.leftChild = insert(x, tree.leftChild);
    if (getHeight(tree.leftChild) - getHeight(tree.rightChild) > 1) {
      if (x < tree.leftChild.data) {
        tree = singleLeftRotation(tree);
      } else {
        tree = doubleLeftRightRotation(tree);
      }
    }
  } else if (x > tree.data) {
    tree.rightChild = insert(x, tree.rightChild);
    if (getHeight(tree.leftChild) - getHeight(tree.rightChild) < -1) {
      if (x > tree.rightChild.data) {
        tree = singleRightRotation(tree);
      } else {
        tree = doubleRightLeftRotation(tree);
      }
    }
  }
  tree.height = Math(getHeight(tree.leftChild), getHeight(tree.rightChild)) + 1;
  return true;
}

