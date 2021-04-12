import { expect } from 'chai';
import { GCD } from '../../../src/fundamentals/apis/GCD';

describe('GCD Test', () => {
  it('test gcd by division', () => {
    const data: [number, number, number][] = [
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [2, 2, 2],
      [6, 9, 3],
      [12, 6, 6],
    ];

    data.forEach((d) => {
      expect(GCD.gcdByDivision(d[0], d[1])).to.equal(d[2]);
    });
  });

  it('test gcd by subtraction', () => {
    const data: [number, number, number][] = [
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [2, 2, 2],
      [6, 9, 3],
      [12, 6, 6],
    ];

    data.forEach((d) => {
      expect(GCD.gcdBySubtraction(d[0], d[1])).to.equal(d[2]);
    });
  });
});
