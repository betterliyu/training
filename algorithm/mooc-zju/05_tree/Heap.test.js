const expect = require('chai').expect;
const {
  createMaxHeap
} = require('./Heap')

describe('test createMaxHeap function', function () {
  let heap;
  it('heap obj should has right properties', function () {
    heap = createMaxHeap([1, 2, 3, 4, 5], 100);
    expect(heap.size).to.be.equal(5);
    expect(heap.capacity).to.be.equal(100);
    expect(heap.elements[1]).to.be.equal(5);
    expect(heap.elements[2]).to.be.equal(4);
    expect(heap.elements[3]).to.be.equal(3);
    expect(heap.elements[4]).to.be.equal(1);
    expect(heap.elements[5]).to.be.equal(2);
  });

  it('should create an empty heap', function () {
    heap = createMaxHeap([], 100);
    expect(heap.size).to.be.equal(0);
    expect(heap.elements.length).to.be.equal(1);
  });
});