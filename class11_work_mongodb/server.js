const bodyParser = require('body-parser');
const express = require('express');
const db = require('mongoose');

const app = express();

// connect to db work1
db.connect('mongodb://127.0.0.1:27017/work1', () => {
    console.log('db/work1 connected');
});

// config object to db
const person = db.Schema({
    username: String,
    password: String,
    email: String,
});
// assign object to model
const personArr = db.model('personModel', person);

// using static folder and bodyParser cfg
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.post('/', (req, res) => {
    // creating object
    let myPerson = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    };

    const addPersonToDb = async (p) => {
        await personArr.insertMany(p);
        console.log(`username ${myPerson.username} added to db`);
    };
    // add object to db
    addPersonToDb(myPerson);

    res.send(`added ${myPerson.username} to db`);
});

// port listening
app.listen('8000', () => {
    console.log('server listen to port 8000');
});

app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/client/signin.html');
});

app.post('/signin', (req, res) => {
    let username = req.body.username;

    const findInDb = async (username) => {
        const myResult = await personArr.find({ username: username });

        if (!myResult.length) return `can't find username ${username}`;

        console.log(myResult);
        res.send(myResult[0].email);
    };

    findInDb(username);
});

app.get('/delete_all', (req, res) => {
    const deleteAll = async () => {
        await personArr.deleteMany({});

        res.send('Successfully deleted all Persons in the database');
    };
    deleteAll();
});
