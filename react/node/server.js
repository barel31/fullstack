const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/svATest', () => {
    console.log('connected to db/svATest');
});

const User = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
});
const UserArr = mongoose.model('userModel', User);

app.post('/signup', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

    if (!firstname.length || !email.length || !password.length || !passwordConfirm.length) {
        res.send('יש למלא את כל שדות החובה');
    }

    const containSpecialChar = (password) => {
        for (let i = 0; i < password.length; i++) {
            if (password[i] >= '0' && password[i] <= '9') continue;
            if (password[i] >= 'a' && password[i] <= 'z') continue;
            if (password[i] >= 'A' && password[i] <= 'Z') continue;
            return true;
        }
        return false;
    };

    if (
        firstname < 2 ||
        firstname > 20 ||
        lastname < 2 ||
        lastname > 20 ||
        (!email.includes('yahoo') && !email.includes('gmail')) ||
        !email.includes('@') ||
        password.length < 2 ||
        password.length > 10 ||
        !containSpecialChar(password) ||
        password !== passwordConfirm
    ) {
        res.send('יש להזין את הערכים בשדות בצורה תקינה');
    } else {
        const findUser = async (email) => {
            const user = await UserArr.findOne({ email: email });
            return user;
        };
        const found = findUser(email);
        found.then((found) => {
            if (found === null) {
                const addUser = async (user) => {
                    await UserArr.insertMany(user);
                    console.log(`Added user ${user.email}`);
                };
                const add = addUser({ firstname: firstname, lastname: lastname, email: email, password: password });
                res.redirect('/menu.html');
            }
        });
    }
});

app.listen('3000', () => {
    console.log('listen to port 3000');
});
