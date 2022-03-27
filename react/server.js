const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('newapp/build'));

app.listen(process.env.PORT || 3000, () => console.log('server listening to port 8080'));
