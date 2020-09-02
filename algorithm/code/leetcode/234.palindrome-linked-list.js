/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let p1 = head;
  let p2 = head;
  while (p1 && p1.next) {
    p1 = p1.next.next;
    p2 = p2.next
  }
  let prev = null;
  while (p2) {
    let next = p2.next;
    p2.next = prev;
    prev = p2;
    p2 = next;
  }
  p1 = prev;
  p2 = head;

  while (p1 && p2) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next
  }
  return true;
};
// @lc code=end

