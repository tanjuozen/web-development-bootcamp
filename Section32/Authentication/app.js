var express = require('express');
var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/auth_demo_app");

var app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret", (req, res) => {
    res.render("secret");
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});