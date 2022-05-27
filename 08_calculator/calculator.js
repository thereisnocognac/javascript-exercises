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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
