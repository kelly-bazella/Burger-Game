var mysql = require("mysql");


if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    var connection = mysql.createConnection({
        host: "jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "m3x2vtkwq6fqe7b2",
        password: "bk808gw6l85qtq5u",
        database: "nmyjxxlv6dmfz17n"
    });
}
connection.connect(function(err){
    if(err){
        console.log("error connecting: "+ err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});

module.exports = connection;