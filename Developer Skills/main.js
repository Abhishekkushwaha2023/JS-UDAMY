'use strict';

// const x = 23;
// if (x === 23) console.log(23);
// const calcAge = (birthYear) => 2024 - birthYear;
// console.log(calcAge(2004));

/* 
 Problem 1:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes ther might be a sensor error"
*/

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/* 
1) Understanding the problem 
-- What is temp amplitude? 
== amplitude = difference between highest and lowest temp
-- How to compute max and min temperatures?
-- What's a sensor error ? and What to do?


2)Breaking up into sub-problems
-- How to ignore errors?
-- Find max value in temp array
-- Find min value in temp array
-- Subtract min from max (amplitude) and return it
*/

const amplitude = function (temps) {
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

console.log(amplitude(temperature));

// Problem 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// -- With 2 arrays, should we implement functionality twice?
// == No! Just merge two arrays

// 2) Breaking up into sub-problems
// -- Merge 2 arrays

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
