import { expect } from 'chai';
import { UFPathCompress } from '../../../src/fundamentals/apis/UFPathCompress';

describe('Union-Find Path Compress Test', () => {
  const uf = new UFPathCompress(10);

  it('should have 10 connected component', () => {
    expect(uf.count).to.equal(10);
  });

  it('1 and 5 should be connected', () => {
    uf.union(1, 5);
    const connected = uf.connected(1, 5);
    expect(connected).to.equal(true);
  });

  it('1 and 8 should be connected', () => {
    uf.union(8, 5);
    const connected = uf.connected(1, 8);
    expect(connected).to.equal(true);
    expect(uf.count).to.equal(8);
  });
});
