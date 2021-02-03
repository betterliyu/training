const expect = require('chai').expect;
const {
  create,
  find,
  find_compress,
  union
} = require('./UnionFind')

describe('test create function', function () {
  it('initialized elements parent link should all be -1', function () {
    const list = create(2);
    expect(list[0]).to.be.equal(-1);
    expect(list[1]).to.be.equal(-1);
  });
});

describe('test union function', function () {
  const list = create(10);
  union(list, 1, 2);
  union(list, 2, 5);

  it('5 parent is 1', function () {
    const p5 = find(list, 5);
    expect(p5).to.be.equal(1);
  });
});

describe('test find function', function () {
  const list = create(10);
  union(list, 1, 2);
  union(list, 2, 5);
  it('2 and 8 are not in the same set', function () {
    const p2 = find(list, 2);
    const p8 = find(list, 8);
    expect(p2).to.not.be.equal(p8);
  });
});


describe('test find compress function', function () {
  const list = [-1, 0, 1, 2, 3, 4, 5];
  it('6s parent should be 4', function () {
    find_compress(list, 6);
    expect(list[6]).to.be.equal(4);
  });
  it('6s parent should be 2', function () {
    find_compress(list, 6);
    expect(list[6]).to.be.equal(2);
  });
  it('6s parent should be 0', function () {
    find_compress(list, 6);
    expect(list[6]).to.be.equal(0);
  });
});