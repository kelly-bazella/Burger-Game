var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    
    insertOne: function(burger_name, cb){
        orm.insertOne(burger_name, false, function(result){
            cb(result);
        })
    },

    updateOne: function(objColVals, cb){
        orm.updateOne("cats", objColVals, condition, function(result){
            cb(result);
        })
    }
}

module.exports = burger;