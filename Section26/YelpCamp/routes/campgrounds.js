var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');

// INDEX - Show all campgrounds
router.get("/", (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {
                campgrounds: campgrounds
            });
        }
    });
});

// CREATE - add new campground to DB
router.post("/", (req, res) => {
    // get data from form and add to campgrounds array
    // redirect back to / route
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
router.get("/new", (req, res) => {
    res.render("campgrounds/new");
});

// SHOW - info about one campground
router.get("/:id", (req, res) => {
    // Find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            // Render show template with that campground
            res.render("campgrounds/show", {
                campground: foundCampground
            });
        }
    });
});

module.exports = router;