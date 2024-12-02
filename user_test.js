// Import required modules
var express = require('express');
var cors = require('cors');
var path = require('path');
var morgan = require('morgan');
var fs = require('fs');
var { MongoClient } = require('mongodb');

// Create an Express application
var app = express();



// MongoDB Atlas connection
var MONGO_URI = 'mongodb+srv://kenny:Kenny123@webstorecluster.xccw4.mongodb.net/'; //  MongoDB Atlas URI
var client = new MongoClient(MONGO_URI);

let productsCollection;
let ordersCollection;

// Connect to MongoDB Atlas
(async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    var database = client.db('Webstore'); //  Database name
    productsCollection = database.collection('products'); //  collection name
    ordersCollection = database.collection('orders'); //  collection name
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
  }
})();

// Start the server
const PORT = 5000;
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});