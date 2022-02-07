const fs = require('fs');
const validator = require('validator');
const readXlsxFile = require('read-excel-file/node');
const express = require('express');
const pug = require('pug');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');

//----------------------
// load grdes from elsx file and render in a chart
//----------------------

var grades = {};
readXlsxFile('grades.xlsx').then((rows) => {
    for (let i = 2; i < rows.length; i++) {
        grades[rows[i][1]] = rows[i][2];
    }
});

app.get('/', (req, res) => {
    res.render('chart', { title: 'Grade Chart', grades: grades });
});

app.listen(3000, () => {
    console.log('Server is up and running on port 3000.');
});

//----------------------
// count words in file
//----------------------
fs.readFile('word_count.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString().split(' ').length);
});

//----------------------
// pow module
//----------------------
const pow = (x, y) => {
    if (typeof x != 'number' || typeof y != 'number') {
        throw 'NAN';
    }
    if (y === 0) {
        return 1;
    }
    let multi = x;
    for (let i = 2; i <= y; i++) {
        x *= multi;
    }
    return x;
};
module.exports = { pow: pow };

//----------------------
// valid email from file
//----------------------
fs.readFile('email.txt', (err, data) => {
    if (err) throw err;

    console.log(validator.isEmail(data.toString()));
});
