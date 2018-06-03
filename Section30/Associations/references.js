var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blog_demo_2");

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
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var User = mongoose.model("User", userSchema);

// Post.create({
//     title: "Third post",
//     content: "hdhdgdgdggdgd"
// }, (err, post)=>{
//     User.findOne({email: "bob@gmail.com"}, (err, foundUser)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save((err, savedUser)=>{
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(savedUser);
//                 }
//             });
//         }
//     });
// });

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob, Just Bob"
// });

// Find user
// Find all posts that the user posted

User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user)=>{
    if(err){
        console.log(err);
    } else {
        console.log(user);
        
    }
});