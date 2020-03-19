var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    book.all(function(data){
        var hbsObject = {
            burger: data 
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// post route

// put route
