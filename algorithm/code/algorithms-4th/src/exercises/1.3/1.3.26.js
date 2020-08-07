/* eslint-disable no-param-reassign */
const remove = (list, key) => {
  while (list.first && list.first.item === key) {
    list.first = list.first.next;
  }

  let cur = list.first;
  if (cur == null) {
    return;
  }
  while (cur.next) {
    if (cur.next.item === key) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
};

module.exports = {
  remove,
};
