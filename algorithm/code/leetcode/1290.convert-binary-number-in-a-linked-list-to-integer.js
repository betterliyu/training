/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
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
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let cur = head;
  let reversed = null;

  while (cur) {
    const n = cur.next;
    cur.next = reversed;
    reversed = cur;
    cur = n;
  }

  let bit = 0;
  cur = reversed;
  let sum = 0;
  while (cur) {
    if (cur.val != null) {
      if (cur.val === 1) {
        sum += Math.pow(2, bit);
      }
    }
    bit += 1;
    cur = cur.next
  }
  return sum;
};
// @lc code=end

