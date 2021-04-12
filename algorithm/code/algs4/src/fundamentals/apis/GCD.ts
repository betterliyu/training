/* eslint-disable no-param-reassign */

export class GCD {
  /**
   * Euclidean algorithm 辗转相除法
   * @param p
   * @param q
   * @return
   */
  static gcdByDivision(p: number, q: number): number {
    if (q === 0) {
      return p;
    }
    const r: number = p % q;
    return GCD.gcdByDivision(q, r);
  }

  /**
   * 更相减损术
   * @param p
   * @param q
   * @return
   */
  static gcdBySubtraction(p: number, q: number): number {
    if (p === q || q === 0) {
      return p;
    }
    if (p > q) {
      p -= q;
    } else {
      q -= p;
    }
    return GCD.gcdBySubtraction(p > q ? p : q, p > q ? q : p);
  }
}
