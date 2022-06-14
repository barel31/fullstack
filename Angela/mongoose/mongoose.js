const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true }, (err) =>
    console.log(err || 'MongoDB Connected')
);

// Fruit Schema
const fruitSchema = mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

// Connect schema to model
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid as a fruit.',
});
// save one model
// fruit.save();

// const personShchema = mongoose.Schema({
//     name: String,
//     age: Number,
// });

// // Connect schema to model
// const Person = mongoose.model('Person', personShchema);

// // Create model
// const person = new Person({
//     name: 'John',
//     age: 27,
// });

// Save one model
// person.save();

// const kiwi = new Fruit({
//     name: 'Kiwi',
//     rating: 10,
//     review: 'The best fruits!!',
// });
// const orange = new Fruit({
//     name: 'Orange',
//     rating: 4,
//     review: 'Too sour for me',
// });
// const banana = new Fruit({
//     name: 'Banana',
//     rating: 3,
//     review: 'Weird texture',
// });

// Save many models
// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     err ? console.log(err) : console.log('Succesfully saved all the fruits to fruitsDB');
// });

// Read From db
// Fruit.find((err, fruits) => console.log(err || fruits));
Fruit.find((err, fruits) => {
    if (err) console.log(err);
    else {
        // mongoose.disconnect;
        mongoose.connection.close();
        fruits.forEach((v) => console.log(v.name));
    }
});