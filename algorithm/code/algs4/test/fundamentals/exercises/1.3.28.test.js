const { expect } = require('chai');
const { maxByRecursion } = require('../../../src/fundamentals/exercises/1.3.28.js');
const { LinkedList } = require('../../../src/fundamentals/apis/LinkedList.js');

describe('Exercises 1.3.28 Test', () => {
  it('should be 4', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(maxByRecursion(list.first)).to.equal(4);
  });

  it('should be 0', () => {
    const list = new LinkedList();
    expect(maxByRecursion(list.first)).to.equal(0);
  });

  it('should be 6', () => {
    const list = new LinkedList();
    list.append(6);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(maxByRecursion(list.first)).to.equal(6);
  });
});
