/* eslint-disable no-unused-vars */
console.log('b');

const foo = () => {
  console.log('foo in b');
};

exports.foo = function f(params) {
  console.log('foo in b');
};
