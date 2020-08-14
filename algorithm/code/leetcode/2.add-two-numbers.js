/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = { next: { val: 0 } };
  let sumP = sum;
  let c1 = l1;
  let c2 = l2;
  let carry = 0;


  while (c1 || c2 || carry === 1) {
    let n1 = c1 && c1.val || 0;
    let n2 = c2 && c2.val || 0;
    let t = n1 + n2 + carry;
    carry = Math.floor(t / 10);
    sumP.next = { val: t % 10, next: null }
    sumP = sumP.next;
    c1 = c1 && c1.next;
    c2 = c2 && c2.next;
  }
  return sum.next;
};
// @lc code=end
