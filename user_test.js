// Import required modules
var express = require('express');
var cors = require('cors');
var path = require('path');
var morgan = require('morgan');
var fs = require('fs');
var { MongoClient } = require('mongodb');

// Create an Express application
var app = express();




// Start the server
const PORT = 5000;
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});