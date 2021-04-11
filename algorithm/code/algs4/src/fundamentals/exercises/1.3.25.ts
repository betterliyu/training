import { Node } from '../apis/LinkedList';

/* eslint-disable no-param-reassign */
export const insertAfter = (node: Node<unknown>, insert: Node<unknown>): void => {
  if (node && insert) {
    insert.next = node.next;
    node.next = insert;
  }
};
