
const abhishek = [
    'Abhishek',
    'Kushwaha',
    2024 - 2004,
    'student',
    ['Tanmay', 'Ayush', 'Nikky']
];

const types = [];

for (let i = 0; i <= abhishek.length - 1; i++) {
    console.log(abhishek[i])
}
// can be done in this way aswell
for (let i = 0; i < abhishek.length; i++) {
    console.log(abhishek[i], typeof abhishek[i])

    // filling types array
    // types[i] = typeof abhishek[i];

    types.push(typeof abhishek[i]);
}

console.log(types);


const years = [1991, 2004, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages);


// continue and break

console.log("Only strings")
for (let i = 0; i < abhishek.length; i++) {
    if (typeof abhishek[i] !== "string") continue;

    console.log(abhishek[i], typeof abhishek[i]);
}

console.log("Break with number")
for (let i = 0; i < abhishek.length; i++) {
    if (typeof abhishek[i] === 'number') break;

    console.log(abhishek[i], typeof abhishek[i]);
}
