import { Node } from '../apis/LinkedList';

export const removeAfter = (node: Node<unknown>): void => {
  if (node && node.next) {
    const removed = node.next;
    // eslint-disable-next-line no-param-reassign
    node.next = node.next.next;
    removed.next = null;
  }
};
