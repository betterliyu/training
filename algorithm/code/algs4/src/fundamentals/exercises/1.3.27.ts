import { Node } from '../apis/LinkedList';

export const max = <T>(first: Node<T>): T | -1 => {
  if (first === null) {
    return -1;
  }
  let cur = first;
  let maxNode = first;
  while (cur) {
    if (maxNode.item < cur.item) {
      maxNode = cur;
    }
    cur = cur.next;
  }
  return maxNode.item;
};
