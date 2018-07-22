var express = require('express');
var router = express.Router({
    mergeParams: true
});
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
router.post("/", isLoggedIn, (req, res) => {
    // get data from form and add to campgrounds array
    // redirect back to / route
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {
        name: name,
        image: image,
        description: description,
        author: author
    };
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            //redirect as a get request
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    });
});

// NEW - Show form to create new campground
router.get("/new", isLoggedIn, (req, res) => {
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

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit", {
                campground: foundCampground
            });
        }
    });
});
// UPDATE CAMPGROUND ROUTE
router.put("/:id", (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;