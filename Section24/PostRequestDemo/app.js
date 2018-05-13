var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var friends = ["Tanju", "Deren", "Vijdan", "Sidika", "Bartu", "Batu"];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/friends", (req, res) => {
  res.render("friends", { friends, friends });
});

app.post("/addfriend", (req, res) => {
  var newfriend = req.body.newfriend;
  friends.push(newfriend);
  res.redirect("/friends");
});

app.listen(3000, () => console.log("Server started on port 3000"));
