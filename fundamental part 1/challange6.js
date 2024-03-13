// Test value 1st
let bill = 275;
let tip;

if ((50 <= bill) && (bill <= 300)) {
    tip = (bill * .15);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
} else {
    tip = (bill * .2);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
}



// Test value 2nd

bill = 40;
tip;


if ((50 <= bill) && (bill <= 300)) {
    tip = (bill * .15);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
} else {
    tip = (bill * .2);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
}



// Test value 3rd
bill = 430;
tip;

if ((50 <= bill) && (bill <= 300)) {
    tip = (bill * .15);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
} else {
    tip = (bill * .2);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
}





// By Udamy 
const billFirst = 275
const tipFirst = 50 <= billFirst && billFirst <= 300 ? billFirst * .15 : billFirst * .2;
console.log(`The bill was ${billFirst}, the tip was ${tipFirst}, and the total value ${billFirst + tipFirst}`)