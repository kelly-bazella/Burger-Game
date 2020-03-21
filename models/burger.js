var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    //"cb" needs to be replaced with variable values
    insertOne: function(burger_name, devoured){
        orm.insertOne("burgers", function(res){
            cb(res);
        })
    },
    //"cb" needs to be replaced with variable values
    updateOne: function(cb){
        orm.updateOne("burgers", function(res){
            cb(res);
        })
    }
}

module.exports = burger;