// function capitalize(word) {
//     var test="";
//     for (var i = 0; i < word.length; i++) {
//        test = test + word.charAt(i).toUpperCase();
//     }
//     return test;
// }

// console.log(capitalize("tanju"));


function isEven(number) {
    if (typeof number !== "number") {
        return "Not A number";
    }

    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));
console.log(isEven("test"));

console.log("***********************");


function factorial(number) {
    if (typeof number !== "number") {
        return "Not A number";
    }

    // return number * factorial(number - 1);
    var result = 1; 
    for(var i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));
console.log(factorial("test"));

console.log("***********************");


function kebabToSnake(word) {
    if (typeof word === "number") {
        return "Not A word";
    }

    return word.replace(/-/g,"_");
    
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));
console.log(kebabToSnake(0));