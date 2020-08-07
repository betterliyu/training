class RandomBag {
  constructor() {
    this.count = 0;
    this.data = [];
  }

  isEmpty() {
    return this.count === 0;
  }

  add(item) {
    this.data.push(item);
    this.count += 1;
  }

  size() {
    return this.count;
  }

  [Symbol.iterator]() {
    const self = this;
    const randomData = this.data;
    for (let i = 0; i < this.count; i += 1) {
      const r = Math.floor(Math.random() * this.count);
      const tmp = randomData[r];
      randomData[r] = this.data[this.count - 1 - r];
      randomData[this.count - 1 - r] = tmp;
    }
    let index = 0;
    return {
      next() {
        if (index < self.count) {
          const value = randomData[index];
          index += 1;
          return { done: false, value };
        }
        return { done: true };
      },
    };
  }
}

module.exports = {
  RandomBag,
};

// test
const bag = new RandomBag();
bag.add(1);
bag.add(2);
bag.add(3);
bag.add(4);
bag.add(5);
bag.add(6);
// eslint-disable-next-line no-restricted-syntax
for (const b of bag) {
  console.log(b);
}
