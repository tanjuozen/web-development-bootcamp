var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var seedDB = require('./seeds');
var methodOverride = require('method-override');

var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require("./models/user");

// Requiring routes
var campgroundRoutes = require('./routes/campgrounds');
var commentRoutes = require('./routes/comments');
var indexRoutes = require('./routes/index');

mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"))
// Inject dummy data to DB
//seedDB();

// PASSPORT CONFIGURATION
app.use(require('express-session')({
  secret: "This text is a secret text",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(3000, () => console.log("Server has been started on port 3000"));