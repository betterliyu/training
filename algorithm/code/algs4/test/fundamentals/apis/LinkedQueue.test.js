const { expect } = require('chai');
const { LinkedQueue } = require('../../../src/fundamentals/apis/LinkedQueue');

describe('Lib LinkedQueue Test', () => {
  it('should output right sentence', () => {
    const input = 'to be or not to - be - - that - - - is';
    const inputs = input.split(' ');
    const queue = new LinkedQueue();
    let output = '';

    for (let i = 0; i < inputs.length; i += 1) {
      const ele = inputs[i];
      if (ele !== '-') {
        queue.enqueue(ele);
      } else if (!queue.isEmpty()) {
        output += `${queue.dequeue()} `;
      }
    }
    output += `(${queue.size()} left on queue)`;

    expect(output).to.equal('to be or not to be (2 left on queue)');
  });
});
