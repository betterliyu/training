import { LinkedList } from '../apis/LinkedList';

/* eslint-disable no-param-reassign */
export const remove = <T>(list: LinkedList<T>, key: T): void => {
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
