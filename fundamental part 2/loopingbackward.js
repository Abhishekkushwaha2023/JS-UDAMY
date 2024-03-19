// Done by me before the teacher explain it
const abhishek = [
    'Abhishek',
    'Kushwaha',
    2024 - 2004,
    'student',
    ['Tanmay', 'Ayush', 'Nikky']
];

// looping backward

for (let i = abhishek.length - 1; i >= 0; i = i - 1) {
    console.log(abhishek[i]);
}


// Done by the teacher
const tanmay = [
    'Tanmay',
    'Verma',
    2024 - 2003,
    'student',
    ['Abhishek', 'Ayush', 'Rahul'],
    true
];

for (let i = tanmay.length - 1; i >= 0; i--) {
    console.log(i, tanmay[i]);
}




// Loop in Loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------Starting Exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Weight lifting exercise ${exercise} atempt ${rep}`);
    }
}

