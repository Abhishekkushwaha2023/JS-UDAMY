// const day = "Tuesday";


// switch (day) {
//     case "Monday":
//         console.log("Lets plan for the Week");
//         console.log("Today I am going to study Physic");
//         break;
//     case "Tuesday":
//         console.log("Today I am going to study Maths");
//         console.log("In the evening I am going to the temple");
//         break;
//     case "Wednesday":
//         console.log("Today I am going to study English");
//         break;
//     case "Thursday":
//     case "Friday":
//         console.log("Today I am going to study Gk");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("Today I am going to Give Test of the whole Week");
//         break;
// }




// Done My self realy

const day = "Saturday";

if (day === "Monday") {
    console.log("Lets plan for the Week.");
    console.log("Today I am going to study Maths.");
} else if (day === "Tuesday") {
    console.log("Today I am going to study Physics.");
    console.log("In the evening I am going to the temple.");
} else if (day === "Wednesday") {
    console.log("Today I am going to study English.");
} else if (day === "Thursday" || day === "Friday") {
    console.log("Today I am going to study Gk.");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Today I am going to Give Test of the whole Week.");
} else {
    console.log("Not a define day. ");
}



let age = 23;
age >= 18 ? console.log("You can drink Wine 🍷") : console.log("You can drink Water");

age = 15;
const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

age = 19
let drink2;
if (age >= 18) {
    drink2 = "Wine 🍷";
} else {
    drink2 = "Water 💧";
}

console.log(drink2)