import { RandomQueue } from '../apis/RandomQueue';

const queue = new RandomQueue<string>();

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
for (const q of queue) {
  console.log(q);
}
