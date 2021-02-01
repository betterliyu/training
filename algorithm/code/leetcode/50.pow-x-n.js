/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) {
    return 1;
  }
  let exponents = [];
  let absN = n > 0 ? n : (n * -1);
  while (absN != 1) {
    if (absN % 2 == 1) {
      exponents.push(1);
    } else {
      exponents.push(0);
    }
    absN = parseInt(absN / 2);
  }
  let cur = x;

  for (let i = exponents.length - 1; i >= 0; i--) {
    if (exponents[i] == 1) {
      cur = cur * cur * x;
    } else {
      cur *= cur;
    }
  }
  return n > 0 ? cur : (1 / cur);
};
// @lc code=end

// myPow(2, -2)