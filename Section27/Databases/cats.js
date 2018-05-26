var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temper: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 20,
//     temper: "Evil"
// });

// george.save((err, cat) => {
//     if (err) {
//         console.log("Someting went wrong");
//     } else {
//         console.log("We just saved a cat into the DB");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Yeni",
    age: 15,
    temper: "falan folen"
}, (err, cat) => {
    if (err) {
        console.log("Something went wrong");
        console.log(err);
    } else {
        console.log("We just saved a cat into the DB");
        console.log(cat);
    }
});

Cat.find({}, (err, cats) => {
    if (err) {
        console.log("OH NO, ERROR");
        console.log(err);
    } else {
        console.log("All the cats:");
        console.log(cats);
    }
});