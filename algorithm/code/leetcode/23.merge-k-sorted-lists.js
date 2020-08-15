/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let res = new ListNode(0);
  let cur = res;

  let len = lists.length;

  while (len != 0) {
    if (lists[0] == null) {
      len -= 1;
      lists.splice(0, 1);
    } else {
      let curMin = lists[0];
      let index = 0;
      for (let i = 1; i < lists.length; i++) {
        if (lists[i] == null) {
          len -= 1;
          lists.splice(i, 1);
          i -= 1;
        } else {
          const listHead = lists[i];
          if (curMin.val >= listHead.val) {
            curMin = listHead;
            index = i;
          }
        }
      }
      lists[index] = lists[index].next;

      cur.next = curMin;
      cur = cur.next;

      if (lists[index] == null) {
        len -= 1;
        lists.splice(index, 1);
      }
    }
  }

  return res.next;
};
// @lc code=end
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// const l11 = new ListNode(1);
// const l14 = new ListNode(4);
// const l15 = new ListNode(5);
// l11.next = l14;
// l14.next = l15;

// const l21 = new ListNode(1);
// const l23 = new ListNode(3);
// const l24 = new ListNode(4);
// l21.next = l23;
// l23.next = l24;

// const l32 = new ListNode(2);
// const l36 = new ListNode(6);
// l32.next = l36;

mergeKLists([null]);
