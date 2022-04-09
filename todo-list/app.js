const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = ['Buy Food', 'Cook Food', 'Eat Food'];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('list', { listTitle: date.getDate(), items: items });
});

app.post('/', (req, res) => {
    const newItem = req.body.newItem;

    if (req.body.list === 'Work') {
        workItems.push(newItem);
        res.redirect('/work');
    } else {
        items.push(newItem);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render('list', { listTitle: 'Work List', items: workItems });
});

app.listen(3000, () => {
    console.log('Server listening to port 3000');
});
