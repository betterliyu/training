/* eslint-disable no-param-reassign */
const removeAfter = (node) => {
  if (node && node.next) {
    const removed = node.next;
    node.next = node.next.next;
    removed.next = null;
  }
};

module.exports = {
  removeAfter,
};
