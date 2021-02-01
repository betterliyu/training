### 特点

堆是非线性结构，是一个数组。满足条件：
$$
(ki <= k2i,ki <= k2i+1) or (ki >= k2i,ki >= k2i+1), (i = 1,2,3,4...n/2)
$$

- 总是一个完全二叉树

- 有序性：每个节点都比其子树上的节点要大（小）

  这样从根节点到叶节点的每一条路径都是有序的

  根节点最大的堆叫做最大堆，根节点最小的堆叫做最小堆。

![image-20210125162522301](Heap(堆).assets/image-20210125162522301.png)

### 代码实现



#### 结构

```javascript
class Heap {
  constructor() {
    this.elements = [];  // 堆元素数组
    this.size = 0;       // 堆的当前元素个数
    this.capacity = 0;   // 堆的最大容量
  }
}
```



#### 创建

```javascript
// 哨兵，所有的插入的值都小于这个值。便于后续操作
const MaxData = 1000;

function create(maxSize) {
  let maxHeap = new Heap();
  maxHeap.elements = new Array(maxSize + 1);
  maxHeap.size = 0;
  maxHeap.capacity = maxSize;
  maxSize.elements[0] = MaxData;  // 哨兵存放在数组的第一个。
}
```



#### 插入

思路：

1. 每次都考虑把数据插入到完全二叉树的最后一位，也就是数组的最后一位；
2. 插入之前要判断是否比父节点要小（如果是最小堆就判断是不是比父节点大）。如果不是，为了保证有序性，那我们应该把新元素插入到现在的位置的父节点上；
3. 依此类推，知道找到根节点，使得整棵树都满足有序性。

时间复杂度：$O(logn)$

> 如何找到父节点的位置，我们可以利用完全二叉树的特性，用当前的节点位置 index / 2。

```javascript
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
```



#### 删除

最大堆的删除指的是删除最大值，也就是树的第一个。第一个删除之后要保证根节点不为空，我们把最后一个节点放在根节点上，但是要保证有序性和满足完全二叉树的特性，我们需要调整树的节点。

思路：

1. 首先删除根节点，将最后一个子节点放到根节点上；
2. 找到根节点的左右子节点，找出最大的那一个，和跟节点（原来的最后一个子节点）互换位置；
3. 依此类推，直到找到原来的最后一个子节点合适的位置。这样树就会被调整成有序的。

时间复杂度：$O(logn)$

```javascript
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
```



### 从一个数组创建堆

我们可以利用插入算法，将数组元素一个个插入到堆中，但是这样的时间复杂度是 $O(nlogn)$。我们可以考虑先将数组全部存储到完全二叉树数组中，然后从最下面的节点开始调整树。我们只要保证左右子节点树都是堆，然后调整整棵树就可以了，所以我们先从最后一个有子节点的节点开始，向上调整。

时间复杂度：$O(n)$

```javascript
function createHeap(list) {
  const h = new Heap();
  h.size = list.length;
  h.elements = [MaxData, ...list];
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
```



### 应用

优先队列

