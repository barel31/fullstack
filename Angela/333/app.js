const { MongoClient } = require('mongodb');
// Connection URI
const uri = 'mongodb://localhost:27017/?maxPoolSize=20&w=majority';
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db('test333').command({ ping: 1 });
        console.log('Connected successfully to server');

        await client.db('test333').collection('test333').insertOne({
            item: 'canvas',
            qty: 100,
            tags: ['cotton'],
            size: { h: 28, w: 35.5, uom: 'cm' },
        });
        console.log('Added successfuly data to collection');
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
