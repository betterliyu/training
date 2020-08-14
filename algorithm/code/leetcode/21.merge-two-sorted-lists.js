/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1) return l2;
  if (!l2) return l1;

  let cur = new ListNode();
  let c3 = cur;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2;
      cur = cur.next;
      l2 = l2.next;
    } else {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
    }
  }

  if (l1) cur.next = l1;
  if (l2) cur.next = l2;

  return c3.next;
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}