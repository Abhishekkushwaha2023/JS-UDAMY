
const Abhishek = {
    firstName: "Abhishek",
    lastName: "Kushwaha",
    birthyear: 2004,
    profession: "student",

    // calling array in object
    friends: ['Tanmay', 'Ayush', 'Nikki'],

    // calling a boolean value in object
    hasDriversLicense: true,

    // calling a function in object 
    /* calcAge: function (birthyear) {
         return 2024 - birthyear;
     }
    */

    // using "this" keyword to directly call birthyear from the Abhishek
    /* calcAge: function () {
         //" this" actually reffers to the object
         console.log(this);
         return 2024 - this.birthyear;
     }*/


    calcAge: function () {
        this.age = 2024 - this.birthyear;
        return this.age;
    }
};

console.log(Abhishek);
console.log(Abhishek.calcAge());
console.log(Abhishek["calcAge"]());
console.log(Abhishek.age);



// challenge
// "Abhishek is a 20-year old Student, and he has a driver's License"

// done by me 
if (Abhishek.hasDriversLicense) {
    console.log(`${Abhishek.firstName} is a ${Abhishek.age}-years old ${Abhishek.profession}, and he has a driver's License.`)
} else {
    console.log(`${Abhishek.firstName} is a ${Abhishek.age}-years old ${Abhishek.profession}, and he does not has a driver's License.`)
};


const Abhishek1 = {
    firstName: "Abhishek",
    lastName: "Kushwaha",
    birthyear: 2004,
    profession: "student",

    // calling array in object
    friends: ['Tanmay', 'Ayush', 'Nikki'],

    // calling a boolean value in object
    hasDriversLicense: true,

    // calling a function in object  
    /* calcAge: function (birthyear) {
         return 2024 - birthyear;
     }
    */

    // using "this" keyword to directly call birthyear from the Abhishek
    /* calcAge: function () {
         //" this" actually reffers to the object
         console.log(this);
         return 2024 - this.birthyear;
     }*/


    calcAge: function () {
        this.age = 2024 - this.birthyear;
        return this.age;
    },

    // done by teacher
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${Abhishek1.profession}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(Abhishek1.getSummary());