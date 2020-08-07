const { expect } = require('chai');
const { UFRank, UFCompress, UFCompressRecursively } = require('./uf_improve');

describe('Union-Find Improve Test', () => {
  describe('rank merge', () => {
    const uf = new UFRank(10);

    it('should have 10 connected component', () => {
      expect(uf.count).to.equal(10);
    });

    it('1 and 5 should be connected', () => {
      uf.union(1, 5);
      const connected = uf.connected(1, 5);
      expect(connected).to.equal(true);
    });

    it('should have no change', () => {
      uf.union(1, 5);
      const connected = uf.connected(1, 5);
      expect(connected).to.equal(true);
    });

    it('1 and 8 should be connected', () => {
      uf.union(8, 5);
      const connected = uf.connected(1, 8);
      expect(connected).to.equal(true);
    });

    it('should have 8 connected component', () => {
      expect(uf.count).to.equal(8);
    });

    it('4 should be under 5', () => {
      uf.union(1, 4);
      expect(uf.parents[4]).to.equal(5);
    });

    it('5 should be under 3', () => {
      uf.union(0, 3);
      uf.union(6, 7);
      uf.union(7, 3);
      uf.union(3, 5);
      expect(uf.parents[5]).to.equal(3);
      expect(uf.parents[3]).to.equal(3);
    });
  });
  describe('compress loop', () => {
    const uf = new UFCompress(10);

    it('should have 10 connected component', () => {
      expect(uf.count).to.equal(10);
    });

    it('1 and 5 should be connected', () => {
      uf.union(1, 5);
      const connected = uf.connected(1, 5);
      expect(connected).to.equal(true);
    });

    it('should have no change', () => {
      uf.union(1, 5);
      const connected = uf.connected(1, 5);
      expect(connected).to.equal(true);
    });

    it('1 and 8 should be connected', () => {
      uf.union(8, 5);
      const connected = uf.connected(1, 8);
      expect(connected).to.equal(true);
    });

    it('should have 8 connected component', () => {
      expect(uf.count).to.equal(8);
    });

    it('4 should be under 5', () => {
      uf.union(1, 4);
      expect(uf.parents[4]).to.equal(5);
    });

    it('5 should be under 3', () => {
      uf.union(0, 3);
      uf.union(6, 7);
      uf.union(7, 3);
      uf.union(3, 5);
      expect(uf.parents[5]).to.equal(3);
      expect(uf.parents[3]).to.equal(3);
    });
  });
  describe('compress recursion', () => {
    const uf = new UFCompressRecursively(10);

    it('should have 10 connected component', () => {
      expect(uf.count).to.equal(10);
    });

    it('1 and 5 should be connected', () => {
      uf.union(1, 5);
      const connected = uf.connected(1, 5);
      expect(connected).to.equal(true);
    });

    it('should have no change', () => {
      uf.union(1, 5);
      const connected = uf.connected(1, 5);
      expect(connected).to.equal(true);
    });

    it('1 and 8 should be connected', () => {
      uf.union(8, 5);
      const connected = uf.connected(1, 8);
      expect(connected).to.equal(true);
    });

    it('should have 8 connected component', () => {
      expect(uf.count).to.equal(8);
    });

    it('4 should be under 5', () => {
      uf.union(1, 4);
      expect(uf.parents[4]).to.equal(5);
    });

    it('5 should be under 3', () => {
      uf.union(0, 3);
      uf.union(6, 7);
      uf.union(7, 3);
      uf.union(3, 5);
      expect(uf.parents[5]).to.equal(3);
      expect(uf.parents[3]).to.equal(3);
    });
  });
});
