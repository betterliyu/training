const maxByRecursion = (current) => {
  if (current == null) {
    return 0;
  }
  const max = maxByRecursion(current.next);

  return Math.max(current.item, max);
};

module.exports = {
  maxByRecursion,
};
