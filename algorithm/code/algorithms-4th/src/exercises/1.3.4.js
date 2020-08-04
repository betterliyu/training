const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const parenthese = (input) => {
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

rl.on('line', (line) => {
  console.log(parenthese(line) ? 'match' : 'no match');
});

rl.on('close', () => {
  console.log('bye bye');
  process.exit(0);
});
