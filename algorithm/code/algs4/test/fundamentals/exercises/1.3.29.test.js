/* eslint-disable no-restricted-syntax */
const { expect } = require('chai');
const { CircleQueue } = require('../../../src/fundamentals/exercises/1.3.29.js');

describe('Exercises 1.3.29 Test', () => {
  it('should output right queue', () => {
    const queue = new CircleQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    queue.enqueue('e');

    let output = '';
    for (const value of queue) {
      output += `${value}, `;
    }
    expect(output).to.equal('a, b, c, d, e, ');

    output = '';
    let s = queue.dequeue();
    while (s != null) {
      output += `${s}, `;
      s = queue.dequeue();
    }

    expect(output).to.equal('a, b, c, d, e, ');
  });
});
