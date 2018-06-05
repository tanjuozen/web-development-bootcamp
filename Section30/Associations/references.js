var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blog_demo_2");

var Post = require('./models/post');
var User = require('./models/user');

Post.create({
    title: "4th post",
    content: "hdhsdgsdg"
}, (err, post)=>{
    User.findOne({email: "bob@gmail.com"}, (err, foundUser)=>{
        if (err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, savedUser)=>{
                if (err) {
                    console.log(err);
                } else {
                    console.log(savedUser);
                }
            });
        }
    });
});

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob, Just Bob"
// });

// Find user
// Find all posts that the user posted

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
        
//     }
// });