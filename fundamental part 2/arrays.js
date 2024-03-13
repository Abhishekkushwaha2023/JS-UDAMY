
/*
const friends = ["Tanmay", "Ayush", "Nikky"];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

//  const years = new Array(28, 5, 31);


// console.log(years.length);
// console.log(years[years.length - 1]);
// friends[3] = "aditya";
// console.log(friends);
friends[2] = "Nikita";
console.log(friends);



const firstName = "Abhishek";
const Abhishek = [firstName, "Kushwaha", 2024 - 2004, "Student", friends];
console.log(Abhishek);

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const years = [2003, 2002, 2000, 2004];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages); 
*/


const friends = ["Tanmay", "Ayush", "Nikky"];

// .push is used to add element to the last of the array
const newLength = friends.push('Aditya', 'Ashish');
console.log(friends);
console.log(newLength);

// .unshift is used to add element to the start of the array 
friends.unshift('Himendar')
console.log(friends);

// Remove last elements 
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// .shift used to remove first elements
friends.shift();
console.log(friends);

// To know the element number 
console.log(friends.indexOf('Ayush'));

// To check if the element is in the array (it is true when element is present and false when element is not present in array)
console.log(friends.includes('Ayush')); // ture
console.log(friends.includes('himendar')); // false
console.log(friends.includes('20')); // false


if (friends.includes("Tanmay")) {
    console.log("You have a friend named Tanmay");
}



