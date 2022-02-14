const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('server listen to port 3000');
});

// Home page
app.use('/', express.static('client'));

// Sign in handle
app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/client/signin.html');
});

app.post('/signin', (req, res) => {
    res.send(`Welcome ${req.body.username}`);
});

// Sign up handle
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/client/signup.html');
});

app.post('/signup', (req, res) => {
    req.body.password === req.body.password_confirm
        ? res.send(`User ${req.body.username} succesfully Signup`)
        : res.send(`Password doesn't match`);
});
