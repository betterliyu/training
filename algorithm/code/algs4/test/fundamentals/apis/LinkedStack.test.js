const { expect } = require('chai');
const { LinkedStack } = require('../../../src/fundamentals/apis/LinkedStack');

describe('Lib LinkedStack Test', () => {
  it('should output right sentence', () => {
    const input = 'to be or not to - be - - that - - - is';
    const inputs = input.split(' ');
    const stack = new LinkedStack();
    let output = '';

    for (let i = 0; i < inputs.length; i += 1) {
      const ele = inputs[i];
      if (ele !== '-') {
        stack.push(ele);
      } else if (!stack.isEmpty()) {
        output += `${stack.pop()} `;
      }
    }
    output += `(${stack.size()} left on stack)`;

    expect(output).to.equal('to be not that or be (2 left on stack)');
  });
});
