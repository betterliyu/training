const { expect } = require('chai');
const { removeAfter } = require('./1.3.24.js');
const { LinkedList } = require('../lib/LinkedList.js');

describe('Exercises 1.3.24 Test', () => {
  const list = new LinkedList();
  before(() => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
  });
  it('should remove nothing', () => {
    removeAfter(list.findIndex(4));
    expect(list.size()).to.equal(4);
  });

  it('should remove 4', () => {
    removeAfter(list.findIndex(3));
    expect(list.size()).to.equal(3);
  });

  it('should remove 2', () => {
    removeAfter(list.findIndex(1));
    expect(list.size()).to.equal(2);
    expect(list.findIndex(2).item).to.equal(3);
  });
});
