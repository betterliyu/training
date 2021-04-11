/* eslint-disable no-param-reassign */

import { Node } from '../apis/LinkedList';

export const reverse = (node: Node<unknown>): Node<unknown> => {
  let reversed = null;
  let first = node;
  while (first) {
    const second = first.next;
    first.next = reversed;
    reversed = first;
    first = second;
  }
  return reversed;
};

export const reverseByRecursion = (current: Node<unknown>): Node<unknown> => {
  if (current == null) {
    return null;
  }
  const newFirst = reverseByRecursion(current.next);
  if (newFirst) {
    current.next.next = current;

    current.next = null;
    return newFirst;
  }
  return current;
};
