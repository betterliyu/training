/* eslint-disable no-else-return */

export class BinarySearch {
  /**
   * 循环算法
   * @param key
   * @param a   sorted array
   * @return
   */
  static rankByLoop(key: number, a: number[]): number {
    let left = 0;
    let right = a.length - 1;
    while (left <= right) {
      const mid = (left + right) / 2;
      if (key === a[mid]) {
        return mid;
      } else if (key < a[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }

  /**
   * 递归算法
   * @param key
   * @param a
   * @return
   */
  static rank(key: number, a: number[]): number {
    return BinarySearch.rankInner(key, a, 0, a.length - 1);
  }

  private static rankInner(key: number, a: number[], left: number, right: number): number {
    if (left > right) {
      return -1;
    }
    const mid = (left + right) / 2;
    if (key === a[mid]) {
      return mid;
    } else if (key < a[mid]) {
      return BinarySearch.rankInner(key, a, left, mid - 1);
    } else if (key > a[mid]) {
      return BinarySearch.rankInner(key, a, mid + 1, right);
    } else {
      return -1;
    }
  }
}
