class Heap {
  constructor() {
    this.elements = []; // 堆元素数组
    this.size = 0; // 堆的当前元素个数
    this.capacity = 0; // 堆的最大容量
  }
}

/**
 * 创建最小堆
 * @param {*} list 
 */
function createMinHeap(list) {
  const h = new Heap();
  h.size = list.length;
  h.elements = [{ weight: 0 }, ...list];
  h.capacity = 5;
  let parent = parseInt(h.size / 2);
  for (; parent > 0; parent--) {
    // 每一个节点都要向下调整树的位置
    percDown(h, parent);
  }
  return h;
}

function percDown(heap, index) {
  const temp = heap.elements[index];
  while (index <= heap.size) {
    // 找到左子节点
    let child = index * 2;
    if (child > heap.size) {
      // 没有左子节点，退出循环
      break;
    }
    if (child + 1 <= heap.size && heap.elements[child].weight > heap.elements[child + 1].weight) {
      // 如果有右子节点，并且右子节点比较小，就定位到右子节点
      child++;
    }
    if (heap.elements[child].weight < temp.weight) {
      // 如果子节点小，就把子节点挪到上面，继续往下面判断
      heap.elements[index] = heap.elements[child];
      index = child;
    } else {
      // 子节点大，说明位置合适，退出循环
      break;
    }
  }
  heap.elements[index] = temp;
}

/**
 * 删除最小值
 * @param {*} heap 
 */
function deleteMin(heap) {
  if (heap.elements.elements == 1) {
    console.log("堆已空");
    return false;
  }
  // 取出最小值
  const min = heap.elements[1];
  // 把最后一个值放到根节点
  const temp = heap.elements[heap.size];
  heap.size--;
  heap.elements.length = heap.elements.length - 1;
  if (heap.size == 0) {
    return temp;
  }
  // 从上到下找到合适的位置，调整树结构
  let index = 1;
  while (index <= heap.size) {
    // 找到左子节点
    let child = index * 2;
    if (child > heap.size) {
      // 没有左子节点，退出循环
      break;
    }
    if (child + 1 <= heap.size && heap.elements[child].weight > heap.elements[child + 1].weight) {
      // 如果有右子节点，并且右子节点比较小，就定位到右子节点
      child++;
    }
    if (heap.elements[child].weight < temp.weight) {
      // 如果子节点小，就把子节点挪到上面，继续往下面判断
      heap.elements[index] = heap.elements[child];
      index = child;
    } else {
      // 子节点大，说明位置合适，退出循环
      break;
    }
  }
  heap.elements[index] = temp;
  return min;
}


function insert(heap, item) {
  if (heap.size == heap.capacity) {
    console.log("堆已满");
    return false;
  }
  if (item.weight < heap.elements[0].weight) {
    console.log("超过允许的最小值");
    return false;
  }
  let index = heap.size + 1;
  for (
    ;
    heap.elements[parseInt(index / 2)].weight > item.weight;
    index = parseInt(index / 2)
  ) {
    // 之所以不判断 index > 0，因为第一个是哨兵，肯定小于 item，所以 index 最小就是 1

    // 如果父节点比 item 大，则把父节点挪下来
    heap.elements[index] = heap.elements[parseInt(index / 2)];
  }
  // 父节点比 item 大，则现在的位置就是 item 的位置
  heap.elements[index] = item;
  // 当前大小加 1
  heap.size++;
  return true;
}

class HuffmanTree {
  constructor() {
    this.left = null;
    this.right = null;
    this.weight = 0;
  }
}

function createHuffmanTree(list) {
  // 根据权值创建最小堆
  let heap = createMinHeap(list);
  // 两两最小的值相加，需要操作 size 次，size 次操作后会得到一个所有值合并后的节点
  let times = heap.size;
  for (let index = 1; index < times; index++) {
    const huffman = new HuffmanTree();
    // 取出两个最小值合并
    huffman.left = deleteMin(heap);
    huffman.right = deleteMin(heap);
    huffman.weight = huffman.left.weight + huffman.right.weight;
    // 将合并后的值插入到最小堆中
    insert(heap, huffman);
  }
  // 返回最小堆的第一个节点
  return deleteMin(heap);
}


const tree = createHuffmanTree([{ weight: 1 }, { weight: 2 }, { weight: 3 }, { weight: 4 }, { weight: 5 }]);