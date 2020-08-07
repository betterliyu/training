const { expect } = require('chai');
const { getCompleteExpression } = require('./1.3.9');

describe('Exercises 1.3.9 Test', () => {
  it('should return complete expression', () => {
    const input = '1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )';
    expect(getCompleteExpression(input)).to.equal('( ( 1 + 2 ) * ( ( 3 - 4 ) * ( 5 - 6 ) ) )');
  });
});
