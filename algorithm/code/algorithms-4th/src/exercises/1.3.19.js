/* eslint-disable no-param-reassign */

const deleteLast = (first) => {
  if (first == null) {
    return;
  }

  if (first.next == null) {
    first = null;
    return;
  }

  let cur = first;

  while (cur.next.next != null) {
    cur = cur.next;
  }

  cur.next = null;
};

module.exports = deleteLast;
