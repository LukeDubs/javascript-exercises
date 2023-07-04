const convertToCelsius = function(far) {
return Math.round(((far - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
return Math.round(((celcius * 1.8) + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


