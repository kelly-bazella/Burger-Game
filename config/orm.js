var connection = require("../config/connection");

var orm = {
    selectAll: function(tableName){

        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result){
            if(err) throw err;
            console.log(result)
        });
    },

    insertOne: function(burger_name, devoured){
        var queryString = "INSERT into burgers (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [burger_name, devoured], function(err, result){
            if(err) throw err;
            console.log(result)
        })
    },

    updateOne: function(asdfas , dfasdf){
        var queryString = "UPDATE burgers SET ?? WHERE ?";
        connection.query(queryString, [asdfas, dfasdf], function(err, result){
            if (err) throw err;
            console.log(result)
        })
    }
};

module.exports = orm;