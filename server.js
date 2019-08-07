var express = require("express");
require('dotenv').config();
var PORT = process.env.PORT || 8081;

var app = express();

var db = require("./models");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routers/apiRouters")(app);

db.sequelize.sync().then(function() {

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
});