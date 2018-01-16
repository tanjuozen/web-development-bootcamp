function printReverse(normalNumbers) {
    var reverseNumbers = [];

    normalNumbers.forEach(function(number) {
        reverseNumbers.unshift(number);
    });

    reverseNumbers.forEach(function(number) {
        console.log(number);
    });
}

function isUniform(formArray) {
    var firstMember = formArray[0];

    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i] !== firstMember) {
            return false;
        }
    }
    return true;

    /* formArray.forEach(function(member, index) {
        if(member === firstMember) {
            firstMember = member;
        } else {
            return false;
        }
    });
    if(firstMember === formArray[formArray.length - 1]) {
        return true;
    } else {
        return false;
    } */
}

function sumArray(calcSum) {
    var total = 0;

    calcSum.forEach(function(member) {
        total += member;
    });
    return total;
}

function max(arr) {
    var max = arr[0];

    arr.forEach(function(member) {
        if (member > max) {
            max = member;
        }
    });
    return max;
}

// My own implementation of forEach to demostrate the anonymous functions and function passing

function myForEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

Array.prototype.myForEach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}