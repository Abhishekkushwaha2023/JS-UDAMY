
// lecture 1


'use strict';
/*
let hasDriversLicense = false;
const passTest = true;
//there is the use of the strict mode "hasDriverLicense in not define which is shown in the console"

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive the vehical.");
*/





/*
// lecture 2

function student() {
    console.log("The student name is Abhishek");
}

// Now we are going to call the function.
student();

// in this we are just directly returning function without saving it in any constant

function fruitProcessor(apples, oranges) {
    return console.log(`Juice with ${apples} apples and ${oranges} oranges.`);

}
fruitProcessor(4, 2);
fruitProcessor(5, 3);
fruitProcessor(4, 5);
*/



/*
// Lecture 3
// in this we first save the value in the constant and console it.

// Function declaration


// function declaration can be called before declaration example.

let age1 = callAge1(2004);
console.log(`"${age1}" This age is called before the function is declared`);

function callAge1(birthYear) {
    return (2024 - birthYear);
}

age1 = callAge1(2004);
console.log(age1);


// Fuction expression

// In this first we have to write the expression then only we can call the funtion.
const callAge2 = function (birthYear) {
    return (2024 - birthYear);
}

const age2 = callAge2(2004);
console.log(age1, age2)
*/




// lecture 4
// Arrow function
// birthyear => 2024 - birthYear; this is how we write a arrow function.

/*
const callAge3 = birthYear => 2024 - birthYear;
const age3 = callAge3(2004);
console.log(age3);



const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    //  return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(2004, "Abhishek"));
console.log(yearUntilRetirement(2000, "Bhola"));

*/




/*
// lecture 5
// calling function from inside another function

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(4, 5));
*/



// lecture 6


const calcAge = function (Year) {
    return 2024 - Year;
}


const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // return retirement;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else if (retirement === 0) {
        return `${firstName} is going retir e this year.`;
    } else {
        return `${firstName} is already retired ${age - 65} years before.`
    }

}

console.log(yearUntilRetirement(2004, 'Abhishek'));
console.log(yearUntilRetirement(1959, 'Abhishek'));
console.log(yearUntilRetirement(1904, 'Abhishek'));


// summary of the lecture

// these are different ways of writing function but they all work same 
/*
 function declaration
function calcAge(birthYear){
    return 2024 - birthYear;
}

function expression
const calcAge = function (birthYear){
    return 2024 - birthYear;
}
arrow function
cosnt calcAge = birthYear => 2024 - birthYear;
*/



