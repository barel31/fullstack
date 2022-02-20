const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1:27017/SVBurgerDB', () => {
    console.log('connected to db/SVBurgerDB');
});

const User = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
});

const UserArr = mongoose.model('userModel', User);

app.post('/signin', (req, res) => {
    const currentUser = {
        email: req.body.email,
        password: req.body.password,
    };

    const findUser = async (email) => {
        const user = await UserArr.findOne({ email: email });
        return user;
    };

    const user = findUser(currentUser.email);
    user.then((found) => {
        if (found !== null) {
            currentUser.password !== found.password ? res.send('Bad Password') : res.redirect('/menu.html');
        } else res.send('no user found at email: ' + currentUser.email);
    });
});

app.post('/signup', (req, res) => {
    const currentUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    };

    // Validation
    const containsSpecialChars = (str) => {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    };

    if (currentUser.email.indexOf('gmail') === -1 && currentUser.email.indexOf('yahoo') === -1) {
        res.send('Error: Email must contain an gmail or a yahoo domain');
    } else if (currentUser.firstname !== '' && (currentUser.firstname.length < 2 || currentUser.firstname.length > 20)) {
        res.send('Error: First name must to be between 2-20 characters');
    } else if (currentUser.lastname !== '' && (currentUser.lastname.length < 2 || currentUser.lastname.length > 20)) {
        res.send('Error: Last name must to be between 2-20 characters');
    } else if (!containsSpecialChars(currentUser.password) || currentUser.password.length < 2 || currentUser.password.length > 10) {
        res.send('Password must contain atleast one special character and the length must to be between 2-10');
    } else if (req.body.passwordConfirm !== currentUser.password) {
        res.send('Password doesn`t match to password confirm');
    } else {
        // Form validation complete

        const findUser = async (email) => {
            const user = await UserArr.findOne({ email: email });
            return user;
        };

        const found = findUser(currentUser.email);
        found.then((found) => {
            if (found === null) {
                const addUser = async (user) => {
                    await UserArr.insertMany(user);
                    console.log(`Added user ${currentUser.email}`);
                };

                addUser(currentUser);
                res.redirect('/menu.html');
            } else {
                res.send('This email have already been taken ' + currentUser.email);
            }
        });
    }
});

app.listen('3000', () => {
    console.log('listen to port 3000');
});
