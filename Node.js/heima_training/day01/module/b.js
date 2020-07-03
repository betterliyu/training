console.log('b');

const foo = () => {
  console.log('foo in b');
};

exports.foo = function (params) {
  console.log('foo in b');
};
