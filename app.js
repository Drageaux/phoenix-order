var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/phoenix-order");

// Import routers
var userRouter = require("./server/routers/userRouter");
var restaurantRouter = require("./server/routers/restaurantRouter");
var orderRouter = require("./server/routers/orderRouter");
// Settings
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json


// Resource loading
app.use("/node_modules", express.static(__dirname + "../node_modules"));
app.use("/", express.static(__dirname + "/dist"));

// API routers
app.use("/user", userRouter);
app.use("/restaurant", restaurantRouter);
app.use("/order", orderRouter);

// Serve HTML files
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


// Run app
app.listen(process.env.PORT || '4200', function () {
    console.log("I'm listening on PORT: " + (process.env.PORT || "4200"));
});