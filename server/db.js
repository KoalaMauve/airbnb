const { MongoClient } = require('mongodb');

// Connection URL
// Database Name
const dbName = 'weather';
const url = 'mongodb://localhost:27017/' + dbName;
const client = new MongoClient(url);

module.exports = client;