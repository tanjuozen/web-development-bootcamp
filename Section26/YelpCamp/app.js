var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", (req, res) => {
  res.render("landing");
});

// INDEX - Show all campgrounds
app.get("/campgrounds", (req, res) => {
  Campground.find({}, (err, campgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {
        campgrounds,
        campgrounds
      });
    }
  });
});

// CREATE - add new campground to DB
app.post("/campgrounds", (req, res) => {
  // get data from form and add to campgrounds array
  // redirect back to /campgrounds route
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {
    name: name,
    image: image,
    description: description
  };
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      //redirect as a get request
      res.redirect("/campgrounds");
    }
  });
});

// NEW - Show form to create new campground
app.get("/campgrounds/new", (req, res) => {
  res.render("new.ejs");
});

// SHOW - info about one campground
app.get("/campgrounds/:id", (req, res) => {
  // Find the campground with provided id
  Campground.findById(req.params.id, (err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      // Render show template with that campground
      res.render("show", {
        campground: foundCampground
      });
    }
  });

});

app.listen(3000, () => console.log("Server has been started on port 3000"));