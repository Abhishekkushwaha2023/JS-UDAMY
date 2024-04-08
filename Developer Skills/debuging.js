'use strict';
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    value: prompt('Degrees celsius:'),
  };

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());

const amplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i = i + 1) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

console.log(amplitudeNew([5, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
