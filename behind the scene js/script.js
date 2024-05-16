"use strict";
/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} year old as you are born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1995 && birthYear <= 2005) {
      //  "Millennial" refers to a demographic cohort typically defined as individuals born between the early 1980s and the mid-to-late 1990s or early 2000s
      var millenial = true;

      // Creating new variable with same name as outer scope's variable
      const firstName = "Aadhi";
      const str = `Hey, you are a millenial, ${firstName}`;
      console.log(str);

      // Reassinging outer scope's variable
      output = "New Output";

      function add(a, b) {
        return a + b;
      }
    }

    // str can not be called outside the block scope
    // console.log(str)

    // millenial can be called outside the block scope because we use var to define it
    console.log(millenial);

    // we can not called add function outside the block
    // console.log(add(3, 4));
  }
  printAge();

  return age;
}

const firstName = "Abhishek";
console.log(calcAge(2004));

//console.log(age);

*/

// Hoisting and TDZ

// Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Abhishek";
// let job = "student";
// const year = 2024;

/*
// Functions

console.log(addDecl(1, 3));
console.log(addArrow(4, 5));
console.log(addExpr(4, 3));

// Function decleration
function addDecl(a, b) {
  return a + b;
}

// Function expression
const addExpr = function (a, b) {
  return a + b;
};

// Arrow function
var addArrow = (a, b) => a + b;

it happens because hoisting only work for function decleration
and var in this case
*/

//
//
//

/*
// Exampley
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

// variable create with var form properties Window Object but variables create with const or let do not create properties on the Window Object

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/
//
//
//

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);

  // Here this keyword is the function own This keyword
  console.log(this);
};
calcAge(2003);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  // Here this keyword is used for the golab scope
  console.log(this);
};
calcAgeArrow(2004);

const abhishek = {
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
abhishek.calcAge();

const shivam = {
  year: 2008,
};

shivam.calcAge = abhishek.calcAge;

// this keyword always points to the object which called the method even though the method is written inside abhishek
// so this comfirm that "this" keyword is dynamic and depends on how the function is called
shivam.calcAge();

const f = abhishek.calcAge;
// it is undefined here because it is not attached to any object
f();
*/

//
//
//
/*
const abhishek = {
  firstName: "Abhishek",
  year: 2004,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    // solution 1
    // const self = this; // self or that
    // const isEligible = function () {
    //   console.log(self);
    //   console.log(self.year <= 2006);
    // };

    // solution 2
    const isEligible = function () {
      console.log(this);
      console.log(this.year <= 2006);
    };
    isEligible();
  },
  // This keyword is only aviable in regular function not in arrow function
  // arrow function get this from the golab scope which is here undefined
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

abhishek.greet();
abhishek.calcAge();
*/

//
//
//
/*
// arguments keyword
// argument keyword exist in only regular function not in arrow function

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 4);

addExpr(3, 4, 5, 6);

// Arrow function
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 4);
addArrow(2, 4, 5, 6);
*/

//
//
//
/*
// let age = 20;
// let oldage = age;
// age = 21;
// console.log(age);
// console.log(oldage);

const me = {
  name: "Abhishek",
  age: 20,
};
const friend = me;
friend.age = 22;
console.log("Friend:", friend);
console.log("ME", me);
*/

//
//
//

// Primitive value
let lastName = "Kushwaha";
let oldLastName = lastName;
lastName = "Kumar";
console.log(lastName, oldLastName);

// Reffrence value
const jessica = {
  firstName: "Jessica",
  lastName: "williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("after marriage:", marriedJessica);

// Copying objects

const jessica2 = {
  firstName: "Jessica",
  lastName: "williams",
  age: 27,
  family: ["Alice", "Bob"],
};

// it will only create a sallow copy which work on only outer element
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

// but it will not work on object or arrays inside the object
jessicaCopy.family.push("Abhi");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("after marriage:", jessicaCopy);
