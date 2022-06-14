const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true }, (err) =>
    console.log(err || 'MongoDB Connected')
);

// Fruit Schema
const fruitSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

// Connect schema to model
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    // name: 'Apple',
    rating: 7,
    review: 'Pretty solid as a fruit.',
});

fruit.save();