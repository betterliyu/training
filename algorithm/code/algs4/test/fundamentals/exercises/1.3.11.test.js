const { expect } = require('chai');
const { evaluatePostfix } = require('../../../src/fundamentals/exercises/1.3.11');

describe('Exercises 1.3.11 Test', () => {
  it('should be 27', () => {
    const infixExp = '3 4 5 + *';
    const postfixExp = evaluatePostfix(infixExp);
    expect(postfixExp).to.equal(27);
  });

  it('should be 277', () => {
    const infixExp = '1 2 3 4 5 * + 6 * * +';
    const postfixExp = evaluatePostfix(infixExp);
    expect(postfixExp).to.equal(277);
  });

  it('should be 30001', () => {
    const infixExp = '7 16 16 16 * * * 5 16 16 * * 3 16 * 1 + + +';
    const postfixExp = evaluatePostfix(infixExp);
    expect(postfixExp).to.equal(30001);
  });

  it('should be 30001 as well', () => {
    const infixExp = '7 16 * 5 + 16 * 3 + 16 * 1 +';
    const postfixExp = evaluatePostfix(infixExp);
    expect(postfixExp).to.equal(30001);
  });
});
