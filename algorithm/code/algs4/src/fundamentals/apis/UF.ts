/**
 * Union-Find
 */
export class UF {
  public count: number;

  public parents: number[];

  constructor(N: number) {
    this.count = N;
    this.parents = [];
    for (let i = 0; i < N; i += 1) {
      this.parents[i] = i;
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
    if (rootP !== rootQ) {
      this.parents[rootP] = rootQ;
      this.count -= 1;
    }
  }

  find(p: number): number {
    let x = p;
    while (this.parents[x] !== x) {
      x = this.parents[x];
    }
    return x;
  }
}
