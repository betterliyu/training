class BST {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

function find(x, tree) {
  if (!tree) {
    return null;
  }
  while (tree) {
    if (x > tree.data) {
      tree = tree.rightChild;
    } else if (x < tree.data) {
      tree = tree.leftChild;
    } else {
      return tree;
    }
  }
}

function min(tree) {
  if (!tree) return null;
  while (tree.leftChild) {
    tree = tree.leftChild;
  }
  return tree;
}

function max(tree) {
  if (!tree) return null;
  while (tree.rightChild) {
    tree = tree.rightChild;
  }
  return tree;
}

function insert(x, tree) {
  if (!tree) {
    tree = x;
  } else {
    while (tree) {
      if (x < tree.data) {
        if (tree.leftChild) {
          tree = tree.leftChild
        } else {
          tree.leftChild = x;
          return;
        }
      } else if (x > tree.data) {
        if (tree.rightChild) {
          tree = tree.rightChild
        } else {
          tree.rightChild = x;
          return;
        }
      } else {
        return 'exist';
      }
    }
  }
}

function deleteNode(x, tree) {
  if (!tree) {
    return false;
  }
  if (x < tree.data) {
    tree.leftChild = deleteNode(x, tree.leftChild);
  } else if (x > tree.data) {
    tree.rightChild = deleteNode(x, tree.rightChild);
  } else {
    if (tree.leftChild && tree.rightChild) {
      const min = min(tree.rightChild)
      tree.data = min.data;
      tree.rightChild = deleteNode(x, tree.rightChild);
    } else {
      if (tree.leftChild) {
        return tree.leftChild;
      } else if (tree.rightChild) {
        return tree.rightChild;
      } else {
        return null;
      }
    }
  }
}