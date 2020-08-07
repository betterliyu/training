const { expect } = require('chai');
const { find } = require('./1.3.21.js');
const { LinkedList } = require('../lib/LinkedList.js');

describe('Exercises 1.3.21 Test', () => {
  it('should find it', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(find(list, 1)).to.equal(true);
    expect(find(list, 2)).to.equal(true);
    expect(find(list, 4)).to.equal(true);
  });

  it('should find nothing', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(find(list, 0)).to.equal(false);
  });
});
