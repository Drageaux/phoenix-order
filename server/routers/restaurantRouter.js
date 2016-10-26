var express = require('express');
var unirest = require('unirest');
var restaurantRouter = express.Router();

restaurantRouter.get("/search/:query", function (req, res) {
    console.log(req.params.query);
    var query = encodeURI(req.params.query);
    console.log(query);
    unirest.get('https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=' +
        query + '&count=10&order=asc')
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Zomato-API-Key': process.env.ZOMATO_API_KEY
        })
        .end(function (response) {
            var searchResult = response.body.restaurants;
            var restaurants = [];
            for (i in searchResult) {
                delete searchResult[i].restaurant.apikey; // need to hide this from client-side
                restaurants.push(searchResult[i].restaurant);
            }
            res.send(restaurants);
        });
});

restaurantRouter.get("/:id", function (req, res) {
    unirest.get('https://developers.zomato.com/api/v2.1/restaurant?res_id=' + req.params.id)
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Zomato-API-Key': process.env.ZOMATO_API_KEY
        })
        .end(function (response) {
            console.log(response.body)
        });
});

module.exports = restaurantRouter;