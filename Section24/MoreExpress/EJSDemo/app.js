var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/posts", (req, res) => {
  var posts = [
    { title: "Post 1", author: "Susy" },
    { title: "My adorable pet bunny", author: "Susy" },
    { title: "COuld you belive this pomsky", author: "Susy" }
  ];
  res.render("posts", { posts: posts });
});

app.get("/test/:name", (req, res) => {
  var name = req.params.name;
  res.render("love", { thingVar: name });
});

app.listen(3000, () => console.log("Started the server on the port 3000"));
