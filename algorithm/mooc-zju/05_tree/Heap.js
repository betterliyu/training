
// 哨兵，所有的插入的值都小于这个值。便于后续操作
const MaxData = 1000;
class MaxHeap {
  constructor(list, maxSize) {
    this._maxData = MaxData;
    this.elements = [this._maxData, ...list]; // 堆元素数组
    this.capacity = maxSize; // 堆的最大容量
    this.size = list.length; // 堆的当前元素个数
    let parent = parseInt(this.size / 2);
    for (; parent > 0; parent--) {
      // 每一个节点都要向下调整树的位置
      percDown_Max.apply(this, [parent]);
    }
  }

  insert(item) {
    if (this.size == this.capacity) {
      console.log("堆已满");
      return false;
    }
    if (item > this.elements[0]) {
      console.log("超过允许的最大值");
      return false;
    }
    let index = this.size + 1;
    for (
      ;
      this.elements[parseInt(index / 2)] < item;
      index = parseInt(index / 2)
    ) {
      // 之所以不判断 index > 0，因为第一个是哨兵，肯定大于 item，所以 index 最小就是 1

      // 如果父节点比 item 小，则把父节点挪下来
      this.elements[index] = this.elements[parseInt(index / 2)];
    }
    // 父节点比 item 大，则现在的位置就是 item 的位置
    this.elements[index] = item;
    // 当前大小加 1
    this.size++;
    return true;
  }

  deleteMax() {
    if (this.elements == 1) {
      console.log("堆已空");
      return false;
    }
    // 取出最大值
    const max = this.elements[1];
    // 把最后一个值放到根节点
    const temp = this.elements[this.size];
    this.size--;
    this.elements.length = this.elements.length - 1;
    if (this.size == 0) {
      return temp;
    }
    // 从上到下找到合适的位置，调整树结构
    let index = 1;
    while (index <= this.size) {
      // 找到左子节点
      let child = index * 2;
      if (child > this.size) {
        // 没有左子节点，退出循环
        break;
      }
      if (child + 1 <= this.size && this.elements[child] < this.elements[child + 1]) {
        // 如果有右子节点，并且右子节点比较大，就定位到右子节点
        child++;
      }
      if (this.elements[child] > temp) {
        // 如果子节点大，就把子节点挪到上面，继续往下面判断
        this.elements[index] = this.elements[child];
        index = child;
      } else {
        // 子节点小，说明位置合适，退出循环
        break;
      }
    }
    this.elements[index] = temp;
    return max;
  }
}

function percDown_Max(index) {
  const temp = this.elements[index];
  while (index <= this.size) {
    // 找到左子节点
    let child = index * 2;
    if (child > this.size) {
      // 没有左子节点，退出循环
      break;
    }
    if (child + 1 <= this.size && this.elements[child] < this.elements[child + 1]) {
      // 如果有右子节点，并且右子节点比较大，就定位到右子节点
      child++;
    }
    if (this.elements[child] > temp) {
      // 如果子节点大，就把子节点挪到上面，继续往下面判断
      this.elements[index] = this.elements[child];
      index = child;
    } else {
      // 子节点小，说明位置合适，退出循环
      break;
    }
  }
  this.elements[index] = temp;
}

const MinData = 0;
class MinHeap {
  constructor(list, maxSize) {
    this._minData = MinData;
    this.elements = [this._minData, ...list]; // 堆元素数组
    this.size = list.length; // 堆的当前元素个数
    this.capacity = maxSize; // 堆的最大容量
    this.size = list.length;
    let parent = parseInt(this.size / 2);
    for (; parent > 0; parent--) {
      // 每一个节点都要向下调整树的位置
      percDown_Min.apply(this, [parent]);
    }
  }

  /**
 * 删除最小值
 */
  deleteMin() {
    if (this.elements.elements == 1) {
      console.log("堆已空");
      return false;
    }
    // 取出最小值
    const min = this.elements[1];
    // 把最后一个值放到根节点
    const temp = this.elements[this.size];
    this.size--;
    this.elements.length = this.elements.length - 1;
    if (this.size == 0) {
      return temp;
    }
    // 从上到下找到合适的位置，调整树结构
    let index = 1;
    while (index <= this.size) {
      // 找到左子节点
      let child = index * 2;
      if (child > this.size) {
        // 没有左子节点，退出循环
        break;
      }
      if (child + 1 <= this.size && this.elements[child] > this.elements[child + 1]) {
        // 如果有右子节点，并且右子节点比较小，就定位到右子节点
        child++;
      }
      if (this.elements[child] < temp) {
        // 如果子节点小，就把子节点挪到上面，继续往下面判断
        this.elements[index] = this.elements[child];
        index = child;
      } else {
        // 子节点大，说明位置合适，退出循环
        break;
      }
    }
    this.elements[index] = temp;
    return min;
  }

  insert(item) {
    if (this.size == this.capacity) {
      console.log("堆已满");
      return false;
    }
    if (item < this.elements[0]) {
      console.log("超过允许的最小值");
      return false;
    }
    let index = this.size + 1;
    for (
      ;
      this.elements[parseInt(index / 2)] > item;
      index = parseInt(index / 2)
    ) {
      // 之所以不判断 index > 0，因为第一个是哨兵，肯定小于 item，所以 index 最小就是 1

      // 如果父节点比 item 大，则把父节点挪下来
      this.elements[index] = this.elements[parseInt(index / 2)];
    }
    // 父节点比 item 大，则现在的位置就是 item 的位置
    this.elements[index] = item;
    // 当前大小加 1
    this.size++;
    return true;
  }

  getPath(i) {
    let pos = i;
    let path = [];
    while (pos > 0) {
      path.push(this.elements[pos]);
      pos = parseInt(pos / 2);
    }
    return path;
  }
}

function percDown_Min(index) {
  const heap = this;
  const temp = heap.elements[index];
  while (index <= heap.size) {
    // 找到左子节点
    let child = index * 2;
    if (child > heap.size) {
      // 没有左子节点，退出循环
      break;
    }
    if (child + 1 <= heap.size && heap.elements[child] > heap.elements[child + 1]) {
      // 如果有右子节点，并且右子节点比较小，就定位到右子节点
      child++;
    }
    if (heap.elements[child] < temp) {
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



module.exports = {
  MaxHeap,
  MinHeap
}
