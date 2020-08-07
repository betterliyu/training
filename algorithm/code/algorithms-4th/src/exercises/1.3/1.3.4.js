const isBalanced = (input) => {
  const stack = [];
  for (let i = 0; i < input.length; i += 1) {
    let match = false;
    const ele = input[i];
    if ('([{'.includes(ele)) {
      stack.push(ele);
    } else {
      const prev = stack.pop();

      match =
        (prev === '(' && ele === ')') ||
        (prev === '[' && ele === ']') ||
        (prev === '{' && ele === '}');

      if (!match) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = isBalanced;
