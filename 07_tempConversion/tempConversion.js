const convertToCelsius = function(temp) {
  let res = (temp - 32) * (5/9);

  return parseFloat(res.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let res = temp * 1.8 + 32;

  return parseFloat(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
