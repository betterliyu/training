import { expect } from 'chai';
import { LinkedList, Node } from '../../../src/fundamentals/apis/LinkedList';
import { insertAfter } from '../../../src/fundamentals/exercises/1.3.25';

describe('Exercises 1.3.25 Test', () => {
  it('should do nothing', () => {
    const list = new LinkedList();

    insertAfter(null, new Node('A'));
    expect(list.size()).to.equal(0);

    insertAfter(null, null);
    expect(list.size()).to.equal(0);

    list.append('a');
    const first = list.findIndex(1);
    insertAfter(first, null);
    expect(list.size()).to.equal(1);
  });

  it('should insert new node into the 2nd pos', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('a');
    list.append('c');

    const first = list.findIndex(1);
    // delete the 1st
    insertAfter(first, new Node('A'));
    expect(list.findIndex(2).item).to.equal('A');
    expect(list.size()).to.equal(5);
  });
});
