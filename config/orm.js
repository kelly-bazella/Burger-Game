var connection = require("../config/connection");

var orm = {
    selectAll: function(tableName, cb){

        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result){
            if(err) throw err;
            cb(result)
        });
    },

    insertOne: function(burger_name, devoured, cb){
        var queryString = "INSERT into burgers (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [burger_name, devoured], function(err, result){
            if(err) throw err;
            cb(result);
        })
    },

    updateOne: function(devoured , id, cb){
        var queryString = "UPDATE burgers SET ?? WHERE ?";
        connection.query(queryString, [devoured, id], function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;