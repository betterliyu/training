const { expect } = require('chai');
const MyList = require('../../src/exercises/1.3.20.js');

describe('Exercises 1.3.20 Test', () => {
  it('should be null', () => {
    const list = new MyList();
    list.append(new MyList(1));
    list.append(new MyList(2));
    list.append(new MyList(3));
    list.append(new MyList(4));

    // delete the 5th
    expect(list.Delete(5)).to.be(null);
    expect(list.Length()).to.be(4);

    // delete the 1st
    expect(list.Length()).to.be(3);
    expect(list.Delete(1).item).to.be(1);
    expect(list.first.item).to.be(2);

    // delete the 3rd
    expect(list.Delete(3).item).to.be(4);
    expect(list.Length()).to.be(2);

    // delete the 4th
    expect(list.Delete(-1)).to.be(null);
  });
});
