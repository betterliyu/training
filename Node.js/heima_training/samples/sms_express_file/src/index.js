const express = require('express');
const renderer = require('express-art-template');

const student = require('./contollers/student');

const app = express();

app.use('/public', express.static('src/public/'));
app.use('/node_modules', express.static('node_modules/'));

app.engine('html', renderer);

app.set('views', 'src/pages');

app.use('/student', student);

app.listen('3000', () => { });
