var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.get("/bye", (req, res) => {
  res.send("GoodBye!");
});

app.get("/r/:subredditName", (req, res) => {
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", (req, res) => {
  res.send("Welcome to the comments page!");
});

// The first route that mathces when request comes in, it will be the only one that runs
// So the order of the routes are really important
app.get("*", (req, res) => {
  res.send("This path has not yet been implemented.");
});

app.listen(3000, () => console.log("Example app listening on port 3000"));
