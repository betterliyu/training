const { expect } = require('chai');
const UF = require('../../src/unit-find/uf');
const { UFRank, UFCompress, UFCompressRecursively } = require('../../src/unit-find/uf_improve');

const testFunc = (UFClass, size, times) => {
  const beginTime = +new Date();
  const uf = new UFClass(size);
  for (let i = 0; i < times; i += 1) {
    const p = Math.round(Math.random() * (uf.count - 1), 10);
    const q = Math.round(Math.random() * (uf.count - 1), 10);
    uf.union(p, q);
  }

  for (let i = 0; i < times; i += 1) {
    const p = Math.round(Math.random() * (uf.count - 1), 10);
    const q = Math.round(Math.random() * (uf.count - 1), 10);
    uf.connected(p, q);
  }
  const endTime = +new Date();
  return endTime - beginTime;
};

describe('Performance Compare Test', () => {
  it('Rank Performance', () => {
    const size = 60000;
    const times = 60000;

    const uf = testFunc(UF, size, times);
    const ufRank = testFunc(UFRank, size, times);

    console.log('uf:', uf);
    console.log('ufRank:', ufRank);

    expect(uf).to.greaterThan(ufRank);
  });

  it('Compress compare', () => {
    const size = 1000000;
    const times = 1000000;

    const ufRank = testFunc(UFRank, size, times);
    const ufCompress = testFunc(UFCompress, size, times);
    const ufCompressRecursively = testFunc(UFCompressRecursively, size, times);

    console.log('ufRank:', ufRank);
    console.log('ufCompress:', ufCompress);
    console.log('ufCompressRecursively:', ufCompressRecursively);

    // 递归的方式不可靠，有可能比 rank 还要慢
    expect(ufRank).to.greaterThan(ufCompress);
    expect(ufRank).to.greaterThan(ufCompressRecursively);
  });
});
