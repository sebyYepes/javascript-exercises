const convertToCelsius = function(temp) {
  const celsius = (temp-32) *(5/9)
  const roundedNum = celsius.toFixed(1);
  return parseFloat(roundedNum)
  
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
