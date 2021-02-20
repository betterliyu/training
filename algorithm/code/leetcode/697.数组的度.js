/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]].push(i);
    } else {
      hash[nums[i]] = [i]
    }
  }
  let max = [];
  for (const key in hash) {
    if (Object.hasOwnProperty.call(hash, key)) {
      const ele = hash[key];
      if (ele.length > max.length || (ele.length == max.length && (ele[ele.length - 1] - ele[0] + 1) < (max.length == 0 ? 0 : max[max.length - 1] - max[0] + 1))) {
        max = ele;
      }
    }
  }
  if (max.length == 0) return 0;
  return max[max.length - 1] - max[0] + 1;
};
// @lc code=end

