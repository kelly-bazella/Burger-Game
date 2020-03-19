var express = require("express");
var app = express();
var exphrs = require("express-handlebars");
var orm = require("./config/orm.js");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// orm.SOMETHING HERE("values", "here", "SomethingElse", function(data){
    // var data=result;
    //console.log(data)
//})

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});
