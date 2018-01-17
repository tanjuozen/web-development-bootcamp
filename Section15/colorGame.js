var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add inital colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function () {
        // grab color of clicked square 
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // loop all through squares
    for (var index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = color;
    }
    // change each color to match given color
}

// pick an index from the colors array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generate random rgb colors to be assigned to starting squares
function generateRandomColors(num) {
    // make an array
    var arr = [];
    // generate random colors to array
    for (var i = 0; i < num; i++) {
        // get random color and push it to array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}
// generate a single rgb color to be pushed to the colors array
function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    // rgb(r, g, b)    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}