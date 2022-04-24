const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static('client'));

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/client/signup.html');
});

app.post('/signup', (req, res) => {
    res.send(`name: ${req.body.name}\npassword: ${req.body.password}`);
});

app.listen(3000, () => {
    console.log('Server listen to port 3000');
});
