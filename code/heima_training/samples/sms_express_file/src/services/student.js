const fs = require('fs');
const path = require('path');
const {
  findIndex, maxBy, get, cloneDeep, find,
} = require('lodash');

const dbPath = path.resolve(__dirname, '../db.json');

/**
 * get all students
 * @param {function} callback
 */
exports.getAll = (callback = () => { }) => {
  fs.readFile(dbPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      let db = {};
      try {
        db = JSON.parse(data);
      } catch (error) {
        // console.log(error);
      } finally {
        db.students = db.students || [];
      }
      callback(null, db.students);
    }
  });
};

/**
 * save new student
 * @param {Student} student
 * @param {Function} callback
 */
exports.save = (student, callback = () => { }) => {
  fs.readFile(dbPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      let db = {};
      try {
        db = JSON.parse(data);
      } catch (error) {
        // console.log(error);
      } finally {
        db.students = db.students || [];
      }
      const { students } = db;
      const maxId = get(maxBy(students, 'id'), 'id', 0);
      const newStudent = cloneDeep(student);
      newStudent.id = maxId + 1;
      newStudent.age = Number(newStudent.age);
      newStudent.gender = Number(newStudent.gender);
      students.push(newStudent);
      fs.writeFile(dbPath, JSON.stringify(db), (errSave) => {
        if (errSave) {
          callback(errSave);
        } else {
          callback();
        }
      });
    }
  });
};

/**
 * update student
 * @param {Student} student
 * @param {Function} callback
 */
exports.update = (student, callback) => {
  fs.readFile(dbPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      let db = {};
      try {
        db = JSON.parse(data);
      } catch (error) {
        // console.log(error);
      } finally {
        db.students = db.students || [];
      }
      const { students } = db;

      const newStudent = cloneDeep(student);

      newStudent.id = parseInt(newStudent.id, 10);
      newStudent.age = parseInt(newStudent.age, 10);
      newStudent.gender = parseInt(newStudent.gender, 10);

      const index = findIndex(students, (s) => s.id === newStudent.id);
      students.splice(index, 1, newStudent);
      fs.writeFile(dbPath, JSON.stringify(db), (errSave) => {
        if (errSave) {
          callback(errSave);
        } else {
          callback();
        }
      });
    }
  });
};

/**
 * get student by id
 * @param {Integer} id
 * @param {Function} callback
 */
exports.get = (id, callback) => {
  fs.readFile(dbPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      let db = {};
      try {
        db = JSON.parse(data);
      } catch (error) {
        // console.log(error);
      } finally {
        db.students = db.students || [];
      }
      const { students } = db;

      const student = find(students, (s) => s.id === id);
      callback(null, student);
    }
  });
};

exports.delete = (id, callback) => {
  fs.readFile(dbPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      let db = {};
      try {
        db = JSON.parse(data);
      } catch (error) {
        // console.log(error);
      } finally {
        db.students = db.students || [];
      }
      const { students } = db;
      const index = findIndex(students, (s) => s.id === id);
      students.splice(index, 1);
      fs.writeFile(dbPath, JSON.stringify(db), (errSave) => {
        if (errSave) {
          callback(errSave);
        } else {
          callback();
        }
      });
    }
  });
};
