/**
 * Union-Find improvement
 * 2. 路径压缩：遍历查找根节点的同时，提升节点的层级，减少树的深度。有两种方式，
 *    a. 遍历时跳过父节点查找祖先节点，将孙节点提升到祖父节点的下面，再提升祖先节点的层级，以此类推；
 *    b. 递归实现查找，返回根节点，将路径上所有节点都提升到根节点下面。但是容易爆栈
 */
export class UFPathCompress {
  public count: number;

  public parents: number[];

  public generations: number[];

  constructor(N: number) {
    this.count = N;
    this.parents = [];
    this.generations = [];
    for (let i = 0; i < N; i += 1) {
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
      // 每次循环都把当前节点指向它的祖父节点，直到找到根节点，这一个分支的深度就变成了原来的一半
      // 而且初始化之后，每次 union 也都会调用这个方法来找根节点，每当分支达到 3 层，下次操作就会变
      // 成 2 层，避免了多层级的出现。
      this.parents[x] = this.parents[this.parents[x]];
      x = this.parents[x];
    }
    return x;
  }
}
