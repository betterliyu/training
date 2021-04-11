import { expect } from 'chai';
import { removeAfter } from '../../../src/fundamentals/exercises/1.3.24';
import { LinkedList } from '../../../src/fundamentals/apis/LinkedList';

describe('Exercises 1.3.24 Test', () => {
  const list = new LinkedList();
  it('should remove right item', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    removeAfter(list.findIndex(4));
    expect(list.size()).to.equal(4);

    removeAfter(list.findIndex(3));
    expect(list.size()).to.equal(3);

    removeAfter(list.findIndex(1));
    expect(list.size()).to.equal(2);
    expect(list.findIndex(2).item).to.equal(3);
  });
});
