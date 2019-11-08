const fs = require('fs');
const path = require('path');

function readFile(fileName)  {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    });
  });
}

async function asyncReadFile () {
  const f1 = await readFile(path.join(__dirname, 'file1.txt'));
  const f2 = await readFile(path.join(__dirname, 'file2.txt'));
  console.log(f1.toString());
  console.log(f2.toString());
}

asyncReadFile();





