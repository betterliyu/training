const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../db.json');

/**
 * get all students
 *
 */
exports.getAll = (callback) => {
  fs.readFile(dbPath, { encoding: 'utf-8' }, (err, data) => {
    
  });
};
