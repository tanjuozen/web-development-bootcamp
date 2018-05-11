var express = require("express");

var app = express();

app.get("/", (req, res) => res.send("Hi there welcome to my assigment!"));

app.get("/speak/:animal", (req, res) => {
  var animal = req.params.animal.toLowerCase();
  var animalResponse = animalSays(animal);
  res.send(animalResponse);
});

app.get("/repeat/:word/:times", (req, res) => {
  var word = req.params.word;
  var times = new Number(req.params.times);
  var repeatedResponse = repeatTheWord(word, times);
  res.send(repeatedResponse);
});

app.get("*", (req, res) => {
  res.send("Sorry page not found... What are you doing with your life?");
});

function animalSays(animalName) {
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof woof",
    cat: "Meow"
  };

  var sound = sounds[animalName];
  return "The " + animalName + " says " + sound;
}

function repeatTheWord(word, times) {
  var response = "";
  for (var index = 0; index < times; index++) {
    response += word + " ";
  }
  return response;
}

app.listen(3000, () => console.log("Started the server on the port 3000"));
