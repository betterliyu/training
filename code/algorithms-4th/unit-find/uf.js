/**
 * Union-Find
 */
class UF {
  constructor(n) {
    this.count = 0;
    this.parents = [];
    for (let i = 0; i < n; i += 1) {
      this.parents[i] = i;
    }
  }

  connected(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    return rootP === rootQ;
  }

  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP !== rootQ) {
      this.parents[rootP] = rootQ;
    }
  }

  find(p) {
    let x = p;
    while (this.parents[x] !== x) {
      x = this.parents[x];
    }
    return x;
  }
}

module.exports = UF;
