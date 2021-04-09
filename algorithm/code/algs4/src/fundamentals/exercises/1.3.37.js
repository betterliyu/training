// 约瑟夫环
const { LinkedQueue } = require('../apis/LinkedQueue');

function Node(item) {
  this.item = item;
  this.next = null;
}

const josephusByCircleList = (total, lucky) => {
  const killed = [];

  const first = new Node(0);

  let cur = first;
  for (let i = 1; i < total; i += 1) {
    const n = new Node(i);
    cur.next = n;
    cur = n;
    if (i === total - 1) {
      cur.next = first;
    }
  }

  let count = total;
  let prev = null;
  cur = first;
  let kill = 0;
  while (count !== 1) {
    if (kill === lucky - 1) {
      prev.next = cur.next;
      cur.next = null;
      killed.push(cur.item);
      cur = prev.next;
      kill = 0;
      count -= 1;
    } else {
      kill += 1;
      prev = cur;
      cur = cur.next;
    }
  }
  console.log(killed);
  return cur.item;
};

const josephusByQueue = (total, lucky) => {
  const killed = [];
  const queue = new LinkedQueue();

  for (let i = 0; i < total; i += 1) {
    queue.enqueue(i);
  }

  let cur = queue.first;
  let kill = 0;
  while (queue.size() !== 1) {
    if (kill === lucky - 1) {
      killed.push(cur.item);
      queue.dequeue();
      cur = cur.next;
      kill = 0;
    } else {
      const k = queue.dequeue();
      queue.enqueue(k);
      cur = cur.next;
      kill += 1;
    }
  }
  console.log(killed);
  return cur.item;
};

const josephusByRecursion = (total, lucky) => {
  if (total === 1) {
    return 0;
  }
  const result = (josephusByRecursion(total - 1, lucky) + lucky) % total;
  return result;
};

console.time('list');
console.log(josephusByCircleList(41, 3));
console.timeEnd('list');

console.time('queue');
console.log(josephusByQueue(41, 3));
console.timeEnd('queue');

console.time('recursion');
console.log(josephusByRecursion(41, 3));
console.timeEnd('recursion');
