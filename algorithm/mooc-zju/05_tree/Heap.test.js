const expect = require('chai').expect;
const {
  MaxHeap,
  MinHeap
} = require('./Heap')

describe('test MaxHeap function', function () {
  let heap;
  it('heap obj should has right properties', function () {
    heap = new MaxHeap([4, 3, 9, 2, 8, 1, 7, 6, 5, 10], 100);
    expect(heap.size).to.be.equal(10);
    expect(heap.capacity).to.be.equal(100);
    expect(heap.elements.slice(1)).to.deep.equal([10, 8, 9, 6, 4, 1, 7, 2, 5, 3])
  });

  it('should create an empty heap', function () {
    heap = new MaxHeap([], 100);
    expect(heap.size).to.be.equal(0);
    expect(heap.elements.length).to.be.equal(1);
  });
});


describe('test getPath function of min heap', function () {
  const minHeap = new MinHeap([10, 23, 26, 46, 24], 5);
  it('should return right path', () => {
    expect(minHeap.getPath(5)).to.deep.equal([24, 23, 10]);
    expect(minHeap.getPath(4)).to.deep.equal([46, 23, 10]);
    expect(minHeap.getPath(3)).to.deep.equal([26, 10]);
    expect(minHeap.getPath(2)).to.deep.equal([23, 10]);
    expect(minHeap.getPath(1)).to.deep.equal([10]);
  })
});