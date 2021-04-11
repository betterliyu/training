/* eslint-disable no-restricted-syntax */
import { expect } from 'chai';
import { CircleQueue } from '../../../src/fundamentals/exercises/1.3.29';

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
