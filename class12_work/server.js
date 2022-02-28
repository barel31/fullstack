const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/', bodyParser.urlencoded({ extended: false }));
app.use(express.static('client'));
app.use(bodyParser.json());

app.listen('8080', () => {
    console.log('server listening to port 8080');
});

app.get('/senduserdata', (req, res) => {
    res.json({
        username: 'barel',
        address: 'tel aviv',
    });
});

app.post('/getuserdata', (req, res) => {
    return res.send('hey :)');
});
