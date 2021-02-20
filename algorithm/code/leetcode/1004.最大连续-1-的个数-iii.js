/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let right = 0;
  let left = 0;
  let max = 0;
  let zeroCount = 0;
  while (right < A.length) {
    if (A[right] == 0) {
      zeroCount++;
    }
    if (zeroCount > K) {
      while (zeroCount > K) {
        if (A[left] == 0) {
          zeroCount--;
        }
        left++;
      }
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};
// @lc code=end
