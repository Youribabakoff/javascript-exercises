const convertToCelsius = function(temp) {
    let cTemp = 5/9 * (temp - 32)
    if (cTemp % 1 == 0) return cTemp;
    return Number(cTemp.toFixed(1));
};

const convertToFahrenheit = function(temp) {
    let fTemp = (temp * 9/5) + 32
    if (fTemp % 1 == 0) return fTemp;
    return Number(fTemp.toFixed(1));
};

console.log(convertToCelsius(100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// SOLUTION 

/* const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
}; */