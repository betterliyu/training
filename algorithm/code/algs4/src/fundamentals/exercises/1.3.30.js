/* eslint-disable no-param-reassign */

const reverse = (node) => {
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

const reverseByRecursion = (current) => {
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

module.exports = {
  reverse,
  reverseByRecursion,
};
