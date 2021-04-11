import { expect } from 'chai';
import { max } from '../../../src/fundamentals/exercises/1.3.27';
import { LinkedList } from '../../../src/fundamentals/apis/LinkedList';

describe('Exercises 1.3.27 Test', () => {
  it('should be 4', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(max(list.first)).to.equal(4);
  });

  it('should be -1', () => {
    const list = new LinkedList();
    expect(max(list.first)).to.equal(-1);
  });

  it('should be 6', () => {
    const list = new LinkedList();
    list.append(6);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(max(list.first)).to.equal(6);
  });
});
