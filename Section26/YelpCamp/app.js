var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
  {
    name: "Salmon Creek",
    image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"
  },
  {
    name: "Mountain Goat's Rest",
    image: "https://farm9.staticflickr.com/8459/7930007382_40143bbeb1.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"
  }
];

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds, campgrounds });
});

app.post("/campgrounds", (req, res) => {
  // get data from form and add to campgrounds array
  // redirect back to /campgrounds route
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  //redirect as a get request
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new.ejs");
});

app.listen(3000, () => console.log("Server has been started on port 3000"));
