var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
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
    }
  ];

  res.render("campgrounds", { campgrounds, campgrounds });
});

app.listen(3000, () => console.log("Server has been started on port 3000"));
