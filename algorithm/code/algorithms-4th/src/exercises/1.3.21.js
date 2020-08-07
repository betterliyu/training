const find = (list, key) => {
  if (list[Symbol.iterator]) {
    // eslint-disable-next-line no-restricted-syntax
    for (const l of list) {
      if (l === key) {
        return true;
      }
    }
  }

  return false;
};

module.exports = {
  find,
};
