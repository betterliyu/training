/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  
  let prev = new ListNode();
  prev.next = head;
  head = prev;
  let first = prev.next;
  let second;

  while (first && first.next) {
    second = first.next;
    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
    first = first.next;
  }

  return head.next;
};
// @lc code=end
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
// const l1 = new ListNode(1);
// const l2 = new ListNode(2);
// const l3 = new ListNode(3);
// const l4 = new ListNode(4);
// l1.next = l2;
// l2.next = l3;
// l3.next = l4;
// swapPairs(l1);
