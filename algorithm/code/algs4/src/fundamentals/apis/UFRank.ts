/**
 * Union-Find improvement
 * 1. 按秩归并：利用 generations 来保存树的层级，把小树放在大树下面，减少树层级增长的速度。
 */
class UFRank {
  count: number;

  parents: number[];

  generations: number[];

  constructor(n: number) {
    this.count = n;
    this.parents = [];
    this.generations = [];
    for (let i = 0; i < n; i += 1) {
      this.parents[i] = i;
      this.generations[i] = 1;
    }
  }

  connected(p: number, q: number): boolean {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    return rootP === rootQ;
  }

  union(p: number, q: number): void {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

    if (this.generations[rootP] > this.generations[rootQ]) {
      this.parents[rootQ] = rootP;
    } else if (this.generations[rootP] < this.generations[rootQ]) {
      this.parents[rootP] = rootQ;
    } else {
      this.parents[rootP] = rootQ;
      this.generations[rootQ] += 1;
    }

    this.count -= 1;
  }

  find(p: number): number {
    let x = p;
    while (this.parents[x] !== x) {
      x = this.parents[x];
    }
    return x;
  }
}

export { UFRank };
