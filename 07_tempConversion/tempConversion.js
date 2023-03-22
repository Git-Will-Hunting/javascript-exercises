function round(value, decimals) {
  var multiplier = Math.pow(10, decimals || 0);
  return Math.round(value * multiplier) / multiplier;
}
const convertToCelsius = function(temperature) {
  // subtract 32 and divide by 1.8
  let newTemp = (temperature - 32) / 1.8;
  newTemp = round(newTemp, 1);
  return newTemp
};

const convertToFahrenheit = function(temperature) {
  // multiply by 1.8 and add 32
  let newTemp = (temperature * 1.8) + 32;
  newTemp = round(newTemp, 1);
  return newTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
