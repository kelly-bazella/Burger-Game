var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data 
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});

// post route
router.post("/add", function(req,res){
    var burger_name = req.body.burger_name;
    burger.insertOne(burger_name, function (result){
            res.redirect("/");
        }
    )
})
// put route

// router.put("/update/:id", function(req, res){
//     burger.updateOne(req.params.id, function(result){
//         res.redirect("/")
//     })
// })

router.put("/update/:id", function(req, res){
    var condition = "id =" + req.params.id;
    console.log("condition",condition)
    burger.updateOne({
        devoured:req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(400).end();
        }else{
            res.status(200).end();
        }
    });
});

module.exports = router;