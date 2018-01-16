console.log("Numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("Even Numbers between 10 and 40");
for (var i = 10; i < 41; i+=2) {
    console.log(i);
}

console.log("Odd Numbers between 300 and 333");
for (var i = 301; i <= 333; i+=2) {
    console.log(i);
}

console.log("All Numbers between 5 and 50 that are divisible to 5 and 3");
for (var i = 5; i < 51; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}