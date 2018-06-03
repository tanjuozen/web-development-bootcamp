var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blog_demo");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "new@new.com",
//     name: "USer With posts",
// });

// newUser.posts.push({
//     title: "How to bla bla",
//     content: "YOu just do whatever you want"
// });

// newUser.save((err, user)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

User.findOne({
    name: "USer With posts"
}, (err, user) => {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
        user.posts.push({
            title: "A second post",
            content: "GIbberish stuff here"
        });
        user.save((err, user)=>{
            if (err) {
                console.log(err);
            } else {
                console.log("Newly saved user: ");
                console.log(user);
            }
        });
    }
});


// var newPost = new Post({
//     title: "Reflection on Apples",
//     content: "They are delicious"
// });

// newPost.save((err, post) => {
//     if (err) {
//         console.log(err);

//     }
//     console.log(post);
// });