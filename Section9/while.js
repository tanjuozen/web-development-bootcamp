var count = -10;

while (count < 20) {
    console.log(count);
    count++;
}
console.log("*****************");

count = 10;

while (count < 41) {
    // if(count % 2 == 0) {
    //     console.log(count);
    // }
    // count++; 
    console.log(count);
    count+=2;
}
console.log("*****************");
count = 300;

while (count < 334) {
    console.log(count + 1);
    count+=2;
}
console.log("*****************");
count = 5;

while (count < 51) {
    if(count % 3 === 0 && count % 5 === 0) {
        console.log(count);
    }
    count++;
}