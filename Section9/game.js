var secretNumber = 7;

var guessedNumber = Number(prompt("Please guess a number"));

if(guessedNumber === secretNumber) {
    alert("You got it right");
} else if(guessedNumber < secretNumber) {
    alert("Too low, try again");
} else {
    alert("Too high, try again");
}

/* while (guessedNumber !== 7) {
    if(guessedNumber < secretNumber) {
        alert("Too low, try again");
        guessedNumber = Number(prompt("Please guess a number"));
        continue;
    } else {
        alert("Too high, try again");
        guessedNumber = Number(prompt("Please guess a number"));
        continue;
    }
}
alert("you got it right"); */