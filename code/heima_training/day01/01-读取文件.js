// 1. 引用 fs 模块
const fs = require('fs');

// 2. 读取文件
fs.readFile('./data/hello.txt', (error, data) => {
  console.log(data); // <Buffer e6 96 87 e4 bb b6 e8 af bb e5 8f 96 e7 a4 ba e4 be 8b>

  console.log(data.toString()); // This is sample string.
});
