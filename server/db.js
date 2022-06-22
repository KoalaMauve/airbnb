const { MongoClient } = require('mongodb');

// Connection URL
// Database Name
const dbName = process.env.DB;
const url = process.env.DBURL + dbName;
const client = new MongoClient(url);

module.exports = client;