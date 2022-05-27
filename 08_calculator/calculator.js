const add = function(sum1, sum2) {
	let totalSum;

  totalSum = sum1 + sum2;

  return totalSum;
};

const subtract = function(sub1, sub2) {
	let totalDiff;

  totalDiff = sub1 - sub2;

  return totalDiff;
};

const sum = function(sumARR) {
	let sumARRTotal;

  sumARRTotal = 0;

  for(i = 0; i < sumARR.length; i++) {
    sumARRTotal = sumARR[i] + sumARRTotal;
  }

  return sumARRTotal;
};

const multiply = function(productArr) {
  let productArrTotal;

  productArrTotal = 1;

  for(let i = 0; i < productArr.length; i++) {
    productArrTotal = productArr[i] * productArrTotal
  }

  return productArrTotal;
};

const power = function(bNum, pNum) {
	let empoweredNum;

  empoweredNum = (Math.pow(bNum, pNum));

  return empoweredNum;
};

const factorial = function(factMe) {
	// let factorialTotal;
  // let indexProduct

  // for(let i = 1; i < factMe; i++) {
  //   factorialTotal = i + 1
  //   indexProduct = factorialTotal * i
  // }

  // if(indexProduct > 0) {
  //   return indexProduct;
  // }else{
  //   return Number(indexProduct);
  // }

  if (factMe < 0) return;
  if (factMe < 2) return 1;

  return factMe * factorial(factMe - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
