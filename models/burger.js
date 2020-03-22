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

    updateOne: function(id, cb){
        orm.updateOne("devoured=true", "id="+id, function(result){
            cb(result);
        })
    }
}

module.exports = burger;