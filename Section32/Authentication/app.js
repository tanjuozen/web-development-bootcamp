var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var User = require('./models/user');

mongoose.connect("mongodb://127.0.0.1:27017/auth_demo_app");

var app = express();

app.use(require('express-session')({
    secret: "This is a secret for the session",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Coming from UserSchema.plugin(passportLocalMongoose)
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// ===================
// ROUTES
// ===================
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret");
});

// Auth Routes
//show sing up form
app.get("/register", (req, res) => {
    res.render("register");
});

// handling user sign up
app.post("/register", (req, res) => {
    User.register(new User({
        username: req.body.username
    }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render("register");
        } else {
            // if everything goes fine and the user is registered
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secret");
            });
        }
    });
});

// LOGIN ROUTES
app.get("/login", (req, res) => {
    res.render("login");
});


// login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), (req, res) => {});


//Logout Logic
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, () => {
    console.log("Server started at port 3000");
});