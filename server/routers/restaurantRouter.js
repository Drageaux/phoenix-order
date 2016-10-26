var express = require('express');
var unirest = require('unirest');
var restaurantRouter = express.Router();

restaurantRouter.get("/search/:query", function (req, res) {
    console.log(req.params.query);
    var query = encodeURI(req.params.query);
    console.log(query);
    unirest.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json' +
        '?location=40.7470889,-73.9946318' +
        '&radius=5000' +
        '&type=restaurant' +
        '&keyword=' + query +
        '&key=' + process.env.GOOGLE_API_KEY)
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        .end(function (response) {
            // var searchResult = response.body.restaurants;
            // var restaurants = [];
            // for (i in searchResult) {
            //     delete searchResult[i].restaurant.apikey; // need to hide this from client-side
            //     restaurants.push(searchResult[i].restaurant);
            // }
            // res.send(restaurants);
            console.log(response.body.results);
            res.send(response.body.results);
        });
});

restaurantRouter.get("/:id", function (req, res) {
    unirest.get('https://maps.googleapis.com/maps/api/place/details/json' +
        '?placeid=' + req.params.id +
        '&key=' + process.env.GOOGLE_API_KEY)
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Zomato-API-Key': process.env.ZOMATO_API_KEY
        })
        .end(function (response) {
            console.log(response.body);
            res.send(response.body.result);
        });
});

module.exports = restaurantRouter;