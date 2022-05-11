const sumAll = function (x, y) {
    let finalSum;
    finalSum = 0;

    if (x < y) {

        for (i = x; i <= y - 1; i++) {
            finalSum = i + finalSum;
        }

    } else if (x > y) {

        for (i = x; i >= y + 1; i--) {
            finalSum = i + finalSum;
        }

    }

    if (x < 0 || y < 0) {
        return 'ERROR';
    }

    if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
        return 'ERROR';
    }



    return finalSum + y;



};

// Do not edit below this line
module.exports = sumAll;
