/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  let fastIndex = 0;
  while (fast.next) {
    fast = fast.next;
    fastIndex += 1;
    if (fastIndex > n) {
      slow = slow.next
    }
  }
  if (fastIndex < n) {
    const del = head;
    head = head.next
    del.next = null;
  } else if (slow.next) {
    const del = slow.next;
    slow.next = slow.next.next
    del.next = null;
  }
  return head;
};
// @lc code=end

