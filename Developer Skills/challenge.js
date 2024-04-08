const printForecast = function (arr) {
  let forecastString = '';
  for (let i = 0; i < arr.length; i++) {
    const days = i + 1;
    forecastString += `... ${arr[i]}°C in ${days} days `;
  }
  return forecastString;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
