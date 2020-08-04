console.log('a start');

const b = require('./b');
// require('./b.js')

console.log('a end');

console.log(b);

b.foo();
