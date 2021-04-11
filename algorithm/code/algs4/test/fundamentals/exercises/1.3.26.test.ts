import { expect } from 'chai';
import { remove } from '../../../src/fundamentals/exercises/1.3.26';
import { LinkedList } from '../../../src/fundamentals/apis/LinkedList';

describe('Exercises 1.3.26 Test', () => {
  it('should delete the first', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('a');
    list.append('c');

    // delete the 1st
    remove(list, 'a');
    expect(list.findIndex(1).item).to.equal('b');
    expect(list.size()).to.equal(2);
  });

  it('should delete the first and second', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('a');
    list.append('b');
    list.append('c');

    // delete the 1st
    remove(list, 'a');
    expect(list.findIndex(1).item).to.equal('b');
    expect(list.size()).to.equal(2);
  });

  it('should be empty', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('a');
    list.append('a');

    // delete the 1st
    remove(list, 'a');
    expect(list.size()).to.equal(0);
  });
});
