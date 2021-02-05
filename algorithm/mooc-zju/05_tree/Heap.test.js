const expect = require('chai').expect;
const {
  MaxHeap
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