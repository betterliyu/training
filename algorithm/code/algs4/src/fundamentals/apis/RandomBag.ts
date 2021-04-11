export class RandomBag<T> implements Iterable<T> {
  public count: number;

  public data: T[];

  constructor() {
    this.count = 0;
    this.data = [];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  add(item: T): void {
    this.data.push(item);
    this.count += 1;
  }

  size(): number {
    return this.count;
  }

  [Symbol.iterator](): Iterator<T> {
    const randomData = this.data;
    for (let i = 0; i < this.count; i += 1) {
      const r = Math.floor(Math.random() * this.count);
      const tmp = randomData[r];
      randomData[r] = this.data[this.count - 1 - r];
      randomData[this.count - 1 - r] = tmp;
    }
    let index = 0;
    const { count } = this;
    return {
      next() {
        if (index < count) {
          const value = randomData[index];
          index += 1;
          return { done: false, value };
        }
        return { done: true, value: undefined };
      },
    };
  }
}
