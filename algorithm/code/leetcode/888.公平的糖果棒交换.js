/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果棒交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const sumA = A.reduce((a, c) => a + c);
  const sumB = B.reduce((a, c) => a + c);
  const setA = new Set(A);
  for (let i = 0; i < B.length; i++) {
    const matched = parseInt((sumA - sumB) / 2) + B[i];
    if (setA.has(matched)) {
      return [matched, B[i]]
    }
  }
  return [];
};
// @lc code=end

