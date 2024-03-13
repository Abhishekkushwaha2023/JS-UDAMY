const Abhishek = {
    firstName: "Abhishek",
    lastName: "Kushwaha",
    age: 2024 - 2004,
    friends: ['Tanmay', 'Ayush', 'Nikki']
};
console.log(Abhishek);

// Through dot(.) notation we can only eccess the properties of the object
console.log(Abhishek.age);
console.log(Abhishek['lastName']);


// with braket[] notation we can give expression or properties of the object as needed in the braket 
const nameKey = 'Name';
console.log(Abhishek['first' + nameKey]);
console.log(Abhishek['last' + nameKey]);



// In these ways we can add properties to the object after declecting it before
Abhishek.location = "Agra";
Abhishek['insta'] = 'itz_abhikushwaha';
console.log(Abhishek);


// in this we are taking input from the user 
const interestedIn = prompt('What do you want to know about Abhishek? Choose bewteen firstName, lastName, age, friends');
const value = Abhishek[interestedIn];
console.log(Abhishek[interestedIn]);

if (Abhishek[interestedIn]) {
    console.log(`The value of the ${interestedIn} in Abhishek is ${value}`);
} else {
    console.log(`There is no such value as ${interestedIn} in the Abhishek! Choose bewteen firstName, lastName, age, friends`)
}

// challenge 
// Console this "Abhishek has 3 friends, and his best friend is called Tanmay"
const numberOfFriends = Abhishek.friends.length;
const bestFriend = Abhishek.friends[0];

console.log(`${Abhishek.firstName} has ${numberOfFriends}, and his best friend is ${bestFriend}`)