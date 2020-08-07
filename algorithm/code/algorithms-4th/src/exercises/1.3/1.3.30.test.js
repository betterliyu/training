/* eslint-disable no-restricted-syntax */
const { expect } = require('chai');
const { reverse, reverseByRecursion } = require('./1.3.30');
const { LinkedList } = require('./1.3.25');

describe('Exercises 1.3.30 Test', () => {
  it('should reverse succeed', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');

    const first = reverse(list.first);

    expect(first.item).equal('e');
  });

  it('should reverse succeed by recursion', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');

    const first = reverseByRecursion(list.first);

    expect(first.item).equal('e');
  });
});
