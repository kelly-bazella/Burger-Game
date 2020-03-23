var connection = require("../config/connection");
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
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
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        querySTRING += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    }
    // updateOne: function(devoured , id, cb){
    //     var queryString = "UPDATE burgers SET ?? WHERE id=?";
    //     connection.query(queryString, [devoured, id], function(err, result){
    //         if (err) throw err;
    //         cb(result);
    //     })
    // }
};



module.exports = orm;