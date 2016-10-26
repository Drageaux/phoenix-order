var express = require('express');
var unirest = require('unirest');
var orderRouter = express.Router();

orderRouter.get("/all", function (req, res) {
    unirest.get('https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=' +
        'thai%20select' +
        '&count=10&order=asc')
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Zomato-API-Key': process.env.ZOMATO_API_KEY
        })
        .end(function (response) {
            console.log(response.body);
            res.send(response.body);
        });
});

module.exports = orderRouter;