// FileName: index.js

// Import express
let express = require('express')

// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes")

// Import Body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Setup server port
var port = process.env.PORT || 8080;

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'));

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});