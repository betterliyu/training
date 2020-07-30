const { expect } = require('chai');
const UF = require('./uf');

describe('Union-Find Test', () => {
  it('should have 10 connected component', () => {
    const uf = new UF(10);
    expect(uf.count).eq(10);
  });
});
