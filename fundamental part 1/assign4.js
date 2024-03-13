const person1 = "Mark";
const person2 = "John";
let markweight = 78;
let markheight = 1.69;
let johnweight = 92;
let johnheight = 1.95;

// BMI = Mass / Height ** 2
const bmiMark = markweight / markheight ** 2;
const bmiJohn = johnweight / johnheight ** 2;

console.log(bmiMark > bmiJohn);

markweight = "95";
markheight = "1.88";
johnweight = "85";
johnheight = "1.76"

console.log(bmiJohn > bmiMark);

console.log(bmiJohn, bmiMark);

if (bmiJohn < bmiMark) {
    console.log("The BMI of John  is less than BMI of Mark ")
} else {
    console.log("The BMI of John is greater than BMI of Mark ")
}


if (bmiJohn > bmiMark) {
    console.log(`The BMI of John ${bmiJohn} is less than BMI of Mark ${bmiMark}`)
} else {
    console.log(`The BMI of John ${bmiJohn} is greater than BMI of Mark ${bmiMark}`)
}


let x = 10 + 5;  // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x *4 = 100
x++;  // x = x + 1
x--;  // x = x - 1
x--;
console.log(x);

const firstName = "Abhishek";
const middleName = "Kushwaha";
console.log(`The name of the student is ${firstName} ${middleName}.`);

const appilationNumber = prompt("What is your Appilation Number");
console.log(`Your application number is "${appilationNumber}"`);
console.log(typeof (appilationNumber));
if (appilationNumber == 1) {
    console.log("Nice you are first to apply :)")
}
else {
    console.log("Thanks for applying :)")
}

if (appilationNumber == 1) {
    alert("Nice you are first to apply :)")
}
else {
    alert("Thanks for applying :)")
}

const haveDriverLicense = true;
const haveGoodVision = true;

if (haveDriverLicense && haveGoodVision) {
    console.log("You are able to drive :)")
} else if (haveDriverLicense || haveGoodVision) {
    console.log("Can drive but stay alert !")
}
else {
    console.log("NO! You are not allowed no dirve")
}