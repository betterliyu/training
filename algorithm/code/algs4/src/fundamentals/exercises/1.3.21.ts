import { LinkedList } from '../apis/LinkedList';

export const find = <T>(list: LinkedList<T>, key: T): boolean => {
  if (list[Symbol.iterator]) {
    for (const l of list) {
      if (l === key) {
        return true;
      }
    }
  }
  return false;
};
