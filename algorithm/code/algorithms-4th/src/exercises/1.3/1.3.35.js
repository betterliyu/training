class RandomQueue {
  constructor() {
    this.data = [];
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  enqueue(item) {
    this.data.push(item);
    this.count += 1;
  }

  dequeue() {
    const rm = Math.floor(Math.random() * this.count);
    const temp = this.data[rm];
    this.data[rm] = this.data[this.count - 1];
    this.data[this.count - 1] = temp;
    this.data.length = this.count - 1;
    this.count -= 1;
    return temp;
  }

  sample() {
    const rm = Math.floor(Math.random() * this.count);
    return this.data[rm];
  }

  [Symbol.iterator]() {
    const self = this;
    const rmData = this.data;
    for (let i = 0; i < this.count; i += 1) {
      const rm = Math.floor(Math.random() * this.count);
      const temp = rmData[rm];
      rmData[rm] = rmData[this.count - 1];
      rmData[this.count - 1] = temp;
    }
    let times = 0;
    return {
      next: () => {
        if (times < self.count) {
          const value = rmData[times];
          times += 1;
          return { done: false, value };
        }

        return { done: true };
      },
    };
  }
}

module.exports = {
  RandomQueue,
};

const queue = new RandomQueue();

const suits = ['黑桃', '红心', '方块', '梅花'];
const num = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
for (let i = 0; i < 4; i += 1) {
  for (let j = 0; j < 13; j += 1) {
    queue.enqueue(`${suits[i]}${num[j]}`);
  }
}

const a = [];
const b = [];
const c = [];
const d = [];

for (let i = 0; i < 13; i += 1) {
  a.push(queue.dequeue());
  b.push(queue.dequeue());
  c.push(queue.dequeue());
  d.push(queue.dequeue());
}

console.log(`a 的牌是：${a}`);
console.log(`b 的牌是：${b}`);
console.log(`c 的牌是：${c}`);
console.log(`d 的牌是：${d}`);

// 随机迭代器
for (let j = 0; j < 10; j += 1) {
  queue.enqueue(j);
}
// eslint-disable-next-line no-restricted-syntax
for (const q of queue) {
  console.log(q);
}
