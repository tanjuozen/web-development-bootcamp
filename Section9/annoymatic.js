var answer = prompt("Are we there yet?");

var finish = false;

/* while (!finish) {
    if (answer == "yes" || answer == "yeah") {
        finish = true;
    } else {
        answer = prompt("Are we there yet?");
    }
} */

/* while (!((answer.includes("yea")) && (answer.includes("yeah")))) {
    var answer = prompt("are we there yet?");
} */

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    var answer = prompt("are we there yeet?");
}
alert("YAY, we finally made it.");