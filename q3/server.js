const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// able loading external files like css or react
app.use(express.static(__dirname + '/client'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/client/index.html');
// });

app.post('/', (req, res) => {
    const string = req.body.string;

    if (string.length) {
        fs.appendFile('strings.txt', JSON.stringify(string), (err, data) => {
            if (err) throw err;
            console.log('Write: ' + string);
        });
        res.send('String Added');
    } else {
        res.send('String is empty');
    }
});

app.listen(3000, () => {
    console.log('Server listening to port 3000');
});

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (username.length < 4 || username.length > 8) {
        res.send('Error: The username have to be 4-8 length');
    } else if (email.indexOf('@') === -1) {
        res.send('Error: The email have to be valid (contain @)');
    } else if (password.length < 5 || password.length > 10) {
        res.send("Error: The password isn't valid");
    } else if (password.indexOf('$') === -1) {
        res.send('The password must contain "$"');
    } else if (password !== req.body.password_confirm) {
        res.send("Error: The password isn't match to the confirm passowrd");
    } else {
        const userData = { username: username, email: email, password: password };
        fs.writeFile('users.txt', JSON.stringify(userData), (err, data) => {
            if (err) throw err;
            console.log('Added user: ' + username);
        });

        res.redirect('/home');
    }
});

app.get('/home', (req, res) => {
    fs.readFile('users.txt', (err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            const userData = JSON.parse(data);
            res.send('hello ' + userData.username);
        }
    });
});
