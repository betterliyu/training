import { expect } from 'chai';
import { infixToPostfix, infixToPostfixStrict } from '../../../src/fundamentals/exercises/1.3.10';

describe('Exercises 1.3.10 Test', () => {
  describe('Test strict method', () => {
    it('should convert to 2 3 4 + 5 6 * * +', () => {
      const infixExp = '( 2 + ( ( 3 + 4 ) * ( 5 * 6 ) ) )';
      const postfixExp = infixToPostfixStrict(infixExp);
      expect(postfixExp).to.equal('2 3 4 + 5 6 * * +');
    });

    it('should convert to 5 7 1 1 + * + 3 * 2 1 1 + * +', () => {
      const infixExp = '( ( ( 5 + ( 7 * ( 1 + 1 ) ) ) * 3 ) + ( 2 * ( 1 + 1 ) ) )';
      const postfixExp = infixToPostfixStrict(infixExp);
      expect(postfixExp).to.equal('5 7 1 1 + * + 3 * 2 1 1 + * +');
    });
  });

  describe('Test common method', () => {
    it('should convert to 2 3 4 + 5 6 * * +', () => {
      const infixExp = '( 2 + ( ( 3 + 4 ) * ( 5 * 6 ) ) )';
      const postfixExp = infixToPostfix(infixExp);
      expect(postfixExp).to.equal('2 3 4 + 5 6 * * +');
    });

    it('should convert to 5 7 1 1 + * + 3 * 2 1 1 + * +', () => {
      const infixExp = '( ( ( 5 + ( 7 * ( 1 + 1 ) ) ) * 3 ) + ( 2 * ( 1 + 1 ) ) )';
      const postfixExp = infixToPostfix(infixExp);
      expect(postfixExp).to.equal('5 7 1 1 + * + 3 * 2 1 1 + * +');
    });
  });
});
