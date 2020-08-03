# 并查集 Union-Find

Union-Find 主要用来解决**动态连通性**的问题。

需要实现的 API 如下：

```javascript
class UF {
  constructor() {
    // 连通分量的个数
  	this.count = 0;
  }
  // 连通两个元素
  union(p, q) { }
  // 查询两个元素是否连通
  connected(p, q) { }
}
```

