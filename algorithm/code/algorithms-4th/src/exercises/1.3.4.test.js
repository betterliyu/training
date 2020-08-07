const { expect } = require('chai');
const isBalanced = require('./1.3.4');

describe('Exercises 1.3.4 Test', () => {
  it('should be true', () => {
    const input = '[()]{}{[()()]()}';
    expect(isBalanced(input)).to.equal(true);
  });

  it('should be false', () => {
    const input = '[(])';
    expect(isBalanced(input)).to.equal(false);
  });
});
