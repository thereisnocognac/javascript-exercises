const removeFromArray = function (array, value, value2, value3, value4) {
    // let removedElement;

    // if (value === array.value) {
    //     removedElement = array
    // }

    // let removedElement;
    // let removedElement2;
    // let finalArray;
    // let finalArray2;

    // removedElement = array.indexOf(value);
    // removedElement2 = array.indexOf(value2);

    // finalArray = array.splice(removedElement, 1);
    // finalArray2 = array.splice(removedElement2, 1);

    // return array.filter();

    for (i = array.length - 1; i >= 0; i--) {
        if (array[i] === value || array[i] === value2) {
            array.splice(i, 1);
        } else if (array[i] === value3) {
            array.splice(i, 1);
        } else if (array[i] === value4) {
            array.splice(i, 1);
        }
    }


    return array;



};

// Do not edit below this line
module.exports = removeFromArray;
