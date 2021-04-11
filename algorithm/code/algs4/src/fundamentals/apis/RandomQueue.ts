export class RandomQueue<T> implements Iterable<T> {
  public data: T[];

  public count: number;

  constructor() {
    this.data = [];
    this.count = 0;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  enqueue(item: T): void {
    this.data.push(item);
    this.count += 1;
  }

  dequeue(): T {
    const rm = Math.floor(Math.random() * this.count);
    const temp = this.data[rm];
    this.data[rm] = this.data[this.count - 1];
    this.data[this.count - 1] = temp;
    this.data.length = this.count - 1;
    this.count -= 1;
    return temp;
  }

  sample(): T {
    const rm = Math.floor(Math.random() * this.count);
    return this.data[rm];
  }

  [Symbol.iterator](): Iterator<T> {
    const rmData = this.data;
    for (let i = 0; i < this.count; i += 1) {
      const rm = Math.floor(Math.random() * this.count);
      const temp = rmData[rm];
      rmData[rm] = rmData[this.count - 1];
      rmData[this.count - 1] = temp;
    }
    let times = 0;
    const { count } = this;
    return {
      next: () => {
        if (times < count) {
          const value = rmData[times];
          times += 1;
          return { done: false, value };
        }

        return { done: true, value: undefined };
      },
    };
  }
}
