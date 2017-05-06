// DEPENDANCIES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var routes = require('./controllers/burgers_controller');
var app = express();


// Serve static contents
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', routes);

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
