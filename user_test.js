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


// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(morgan("short"));

var staticMiddleware = express.static(path.join(__dirname, '../AfterSchoolApp/dist'));

// Use a middleware to log errors if static files cannot be served
app.use((req, res, next) => {
  staticMiddleware(req, res, (err) => {
    if (err) {
      console.error('Error serving static file: ${err.message}');
      res.status(500).send('Internal Server Error while serving static files.');
    } else {
      next();
    }
  });
});




// Start the server
const PORT = 5000;
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});