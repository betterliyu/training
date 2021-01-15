class TreeNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}


function preOrderTraversal_recursion(treeNode) {
  if (!treeNode) return;
  console.log(treeNode.data);
  preOrderTraversal_recursion(treeNode.leftChild);
  preOrderTraversal_recursion(treeNode.rightChild);
}

function inOrderTraversal_recursion(treeNode) {
  if (!treeNode) return;
  inOrderTraversal_recursion(treeNode.leftChild);
  console.log(treeNode.data);
  inOrderTraversal_recursion(treeNode.rightChild);
}

function postOrderTraversal_recursion(treeNode) {
  if (!treeNode) return;
  postOrderTraversal_recursion(treeNode.leftChild);
  postOrderTraversal_recursion(treeNode.rightChild);
  console.log(treeNode.data);
}


function preOrderTraversal_stack(treeNode) {
  let node = treeNode;
  let stack = [];
  while (node || stack.length !== 0) {
    while (node) {
      console.log(node.data);
      stack.push(node);
      node = node.leftChild;
    }
    if (stack.length !== 0) {
      let n = stack.pop();
      node = n.rightChild;
    }
  }
}

function inOrderTraversal_stack(treeNode) {
  let node = treeNode;
  let stack = [];
  while (node || stack.length !== 0) {
    while (node) {
      stack.push(node);
      node = node.leftChild;
    }
    if (stack.length !== 0) {
      let n = stack.pop();
      console.log(n.data);
      node = n.rightChild;
    }
  }
}

function postOrderTraversal_stack(treeNode) {
  let node = treeNode;
  let stack = [];
  let prev = null;
  while (node || stack.length !== 0) {
    while (node) {
      if (prev === node) {
        break;
      }
      stack.push(node);
      node = node.leftChild;
    }
    if (stack.length !== 0) {
      let n = stack[stack.length - 1];
      if (n.rightChild && n.rightChild !== node) {
        node = n.rightChild;
      } else {
        console.log(n.data);
        node = stack.pop();
        prev = node;
      }
    }
  }
}

function levelOrderTraversal(treeNode) {
  let queue = [];
  queue.push(treeNode);
  while (queue.length != 0) {
    let node = queue.shift();
    console.log(node.data);
    if (node.leftChild) queue.push(node.leftChild);
    if (node.rightChild) queue.push(node.rightChild);
  }
}

function getTreeHeight(treeNode) {
  if (treeNode) {
    const leftHeight = postOrderTraversal_recursion(treeNode.leftChild);
    const rightHeight = postOrderTraversal_recursion(treeNode.rightChild);
    const maxHeight = Math.max(leftHeight, rightHeight) + 1;
    return maxHeight;
  }
  return 0;
}


function isomorphism(tree1, tree2) {
  if (tree1 == null && tree2 == null) {
    return true;
  } else if ((tree1 == null && tree2 != null) || (tree2 == null && tree1 != null)) {
    return false;
  } else {
    if (tree1.data == tree2.data) {
      return (isomorphism(tree1.leftChild, tree2.leftChild) && isomorphism(tree1.rightChild, tree2.rightChild))
        || (isomorphism(tree1.leftChild, tree2.rightChild) && isomorphism(tree1.rightChild, tree2.leftChild))
    } else {
      return false;
    }
  }
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);
const n7 = new TreeNode(7);
n1.leftChild = n2;
n1.rightChild = n3;
n2.leftChild = n4;
n2.rightChild = n5;
n3.leftChild = n6;
n4.rightChild = n7;

// preOrderTraversal_recursion(n1);
// preOrderTraversal_stack(n1);
// inOrderTraversal_recursion(n1);
// inOrderTraversal_stack(n1);
// postOrderTraversal_recursion(n1);
// postOrderTraversal_stack(n1);