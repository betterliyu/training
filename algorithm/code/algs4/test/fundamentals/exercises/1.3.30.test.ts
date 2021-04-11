/* eslint-disable no-restricted-syntax */
import { expect } from 'chai';
import { LinkedList } from '../../../src/fundamentals/apis/LinkedList';
import { reverse, reverseByRecursion } from '../../../src/fundamentals/exercises/1.3.30';

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
