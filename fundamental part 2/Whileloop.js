// USING FOR LOOP 
console.log("USING FOR LOOP");
for (let rep = 1; rep <= 10; rep++) {

    console.log(`Weight lifting exercise 🏋️ ${rep}`);
}



// USING WHILE LOOP
let rep = 1;
console.log("USING WHILE LOOP ");
while (rep <= 10) {

    console.log(`Weight lifting exercise 🏋️ ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end...')
    }
}