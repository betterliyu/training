const { expect } = require('chai');
const MyList = require('./1.3.20.js');

describe('Exercises 1.3.20 Test', () => {
  it('should be null', () => {
    const list = new MyList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    // delete the 5th
    expect(list.delete(5)).to.equal(null);
    expect(list.size()).to.equal(4);

    // delete the 1st
    expect(list.delete(1)).to.equal(1);
    expect(list.size()).to.equal(3);
    expect(list.first.item).to.equal(2);

    // delete the 3rd
    expect(list.delete(3)).to.equal(4);
    expect(list.size()).to.equal(2);

    // delete the 4th
    expect(list.delete(-1)).to.equal(null);
  });
});
