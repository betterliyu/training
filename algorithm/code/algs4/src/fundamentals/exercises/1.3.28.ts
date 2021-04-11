import { Node } from '../apis/LinkedList';

export const maxByRecursion = <T>(current: Node<T>): T | -1 => {
  if (current == null) {
    return -1;
  }
  const max = maxByRecursion(current.next);

  return current.item > max ? current.item : max;
};
