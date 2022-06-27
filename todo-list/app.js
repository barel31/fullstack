const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//? Mongoose
mongoose.connect('mongodb://localhost:27017/todolistDB', { useNewUrlParser: true });

const itemsSchema = mongoose.Schema({
    name: { type: String, required: true },
});

const listSchema = mongoose.Schema({
    name: { type: String, required: true },
    items: [itemsSchema],
});

const Item = mongoose.model('Item', itemsSchema);
const List = mongoose.model('List', listSchema);

// Item.deleteMany({}, e => console.log(e || 'Deleted all items'));
// List.deleteMany({}, e => console.log(e || 'Deleted all items'));

const defaultItems = [
    Item({ name: 'Welcome to your todolist!' }),
    Item({ name: 'Hit the + button to add a new item.' }),
    Item({ name: '<-- Hit this to delete an item.' }),
];

app.get('/', (req, res) => {
    Item.find({}, (err, found) => {
        if (err) console.log(err);
        else {
            if (!found.length) {
                Item.insertMany(defaultItems, (e) => {
                    if (e) console.log(e);
                    res.redirect('/');
                });
            } else res.render('list', { listTitle: 'Today', listItems: found });
        }
    });
});

app.get('/:customListName', (req, res) => {
    const customListName = req.params.customListName;

    if (customListName === 'favicon.ico') return;

    if (customListName === 'today') res.redirect('/');
    else {
        List.findOne({ name: customListName }, (e, found) => {
            if (e) console.log(e);
            else if (!found) {
                console.log(customListName + " doesn't exists");
                new List({ name: customListName, items: defaultItems }).save();
                res.redirect(`/${customListName}`);
            } else {
                res.render('list', { listTitle: found.name, listItems: found.items });
            }
        });
    }
});

app.post('/', (req, res) => {
    const newItem = req.body.newItem;
    const listName = req.body.listName;

    console.log({ listName });

    if (newItem.length) {
        const item = new Item({ name: newItem });

        if (listName === 'Today') {
            console.log('Added to Today ' + newItem);
            item.save();
            res.redirect('/');
        } else {
            List.findOne({ name: listName }, (e, found) => {
                if (e) console.log(e);
                else {
                    found.items.push(item);
                    found.save();
                    res.redirect('/' + listName);
                }
            });
        }
    } else res.redirect('/' + listName);
});

app.post('/delete', (req, res) => {
    const listName = req.body.listName;
    const checkboxId = req.body.checkbox;

    console.log({ listName, checkboxId });

    if (!checkboxId) return;

    if (listName === 'Today') {
        Item.deleteOne({ _id: checkboxId }, (e) => {
            if (e) console.log(e);
            else res.redirect('/');
        });
    } else {
        List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkboxId } } }, (e) => {
            if (e) console.log(e);
            else res.redirect('/' + listName);
        });
        // found.items.filter((v) => v._id === checkboxId);
        // found.items.findbyIdAndRemove(checkboxId, (e) => {
        //     if (e) console.log(e);
        // });
    }
});

app.listen(3000, () => {
    console.log('Server listening to port 3000');
});
