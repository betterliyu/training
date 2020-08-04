const fs = require('fs');

fs.writeFile('./data/你好.md', '# Sample file', (error) => {
  console.log(error);
});
