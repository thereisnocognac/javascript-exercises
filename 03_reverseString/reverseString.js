const reverseString = function (string) {
    let seperateString;
    let backString;
    let joinString;

    seperateString = string.split("");

    backString = seperateString.reverse();

    joinString = backString.join("");

    return joinString;

};

// Do not edit below this line
module.exports = reverseString;
