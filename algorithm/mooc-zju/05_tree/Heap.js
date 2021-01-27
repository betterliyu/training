class Heap {
  constructor() {
    this.elements = []; // 堆元素数组
    this.size = 0; // 堆的当前元素个数
    this.capacity = 0; // 堆的最大容量
  }
}

// 哨兵，所有的插入的值都小于这个值。便于后续操作
const MaxData = 1000;

function create(maxSize) {
  let maxHeap = new Heap();
  maxHeap.elements = new Array(maxSize + 1);
  maxHeap.size = 0;
  maxHeap.capacity = maxSize;
  maxSize.elements[0] = MaxData;
}

function insert(heap, item) {
  if (heap.size == heap.capacity) {
    console.log("堆已满");
    return false;
  }
  if (item > heap.elements[0]) {
    console.log("超过允许的最大值");
    return false;
  }
  let index = heap.size + 1;
  for (
    ;
    heap.elements[parseInt(index / 2)] < item;
    index = parseInt(index / 2)
  ) {
    // 之所以不判断 index > 0，因为第一个是哨兵，肯定大于 item，所以 index 最小就是 1

    // 如果父节点比 item 小，则把父节点挪下来
    heap.elements[index] = heap.elements[parseInt(index / 2)];
  }
  // 父节点比 item 大，则现在的位置就是 item 的位置
  heap.elements[index] = item;
  // 当前大小加 1
  heap.size++;
  return true;
}

function deleteMax(heap) {
  if (heap.elements.elements == 1) {
    console.log("堆已空");
    return false;
  }
  // 取出最大值
  const max = heap.elements[1];
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
    if (child + 1 <= heap.size && heap.elements[child] < heap.elements[child + 1]) {
      // 如果有右子节点，并且右子节点比较大，就定位到右子节点
      child++;
    }
    if (heap.elements[child] > temp) {
      // 如果子节点大，就把子节点挪到上面，继续往下面判断
      heap.elements[index] = heap.elements[child];
      index = child;
    } else {
      // 子节点小，说明位置合适，退出循环
      break;
    }
  }
  heap.elements[index] = temp;
  return max;
}

function createMaxHeap(list, maxSize) {
  const h = new Heap();
  h.size = list.length;
  h.elements = [MaxData, ...list];
  h.capacity = maxSize;
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
    if (child + 1 <= heap.size && heap.elements[child] < heap.elements[child + 1]) {
      // 如果有右子节点，并且右子节点比较大，就定位到右子节点
      child++;
    }
    if (heap.elements[child] > temp) {
      // 如果子节点大，就把子节点挪到上面，继续往下面判断
      heap.elements[index] = heap.elements[child];
      index = child;
    } else {
      // 子节点小，说明位置合适，退出循环
      break;
    }
  }
  heap.elements[index] = temp;
}


module.exports = {
  Heap,
  insert,
  deleteMax,
  createMaxHeap
}
