const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true }, (err) =>
    console.log(err || 'MongoDB Connected')
);

//? Fruit Schema
const fruitSchema = mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

//? Connect schema to model
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid as a fruit.',
});

//? save one model
// fruit.save();

//? Create Person schema
const personShchema = mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,
});

//? Connect schema to model
const Person = mongoose.model('Person', personShchema);

//? Create model
const person = new Person({
    name: 'John',
    age: 27,
});

//? Save one model
// person.save(() => mongoose.disconnect());

//? Create 3 new fruits
const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 10,
    review: 'The best fruits!!',
});
const orange = new Fruit({
    name: 'Orange',
    rating: 4,
    review: 'Too sour for me',
});
const banana = new Fruit({
    name: 'Banana',
    rating: 3,
    review: 'Weird texture',
});

//? Save many models
// Fruit.insertMany([kiwi, orange, banana], (err) => console.log(err || 'Succesfully saved all the fruits to fruitsDB'));

//? Read From db
// Fruit.find((err, fruits) => console.log(err || fruits));
// Fruit.find((err, fruits) => {
//     err ? console.log(err) : fruits.forEach((v) => console.log(v.name));
//     mongoose.connection.close();
// });

//? Update model
// Fruit.updateOne({ _id: '62ab57e47a82982a1bd11f30' }, { name: 'Peach' }, (err) => {
//     console.log(err || 'Succesfully updated the document.');
// });

//? Delete one document
// Fruit.deleteOne({ name: '62ab57e47a82982a1bd11f34' }, (err) => {
//     console.log(err || 'Succesfully removed the document.');
//     mongoose.connection.close();
// });

//? Delete many (where name = 'John')
// Person.deleteMany({ name: 'John' }, (err) => {
//     console.log(err || 'Succesfully deleted all person with the name "John"');
//     mongoose.connection.close();
// });

//? Create new fruit
const pineapple = new Fruit({
    name: 'Pinapple',
    score: 9,
    review: 'Great fruit',
});

// pineapple.save();

const person2 = Person({
    name: 'Amy',
    score: 12,
    favoriteFruit: pineapple,
});

// person2.save(() => mongoose.disconnect());

const mango = new Fruit({ name: 'Mango2', score: 9, review: 'Decent fruit' });
// mango.save();

Person.updateOne({ name: 'John' }, { favoriteFruit: mango }, e => console.log(e || 'Update success'));
