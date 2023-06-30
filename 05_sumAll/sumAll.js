const sumAll = function(num1, num2) {
    let numSum = 0;
    if (num1 < num2 && num1 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        for (let i = num1; i <= num2; i++) {
            numSum += i;
        }
    } else if (num2 < num1 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        for (let i = num2; i <= num1; i++) {
            numSum += i;
        }
    } else {
        return "ERROR";
    }
    return numSum
};

console.log(sumAll(1, 90))

// SOLUTION
/* const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  }; */



// Do not edit below this line
module.exports = sumAll;
