
const calcAvg = (a, b, c) => (a + b + c) / 3;
let avgDolphins = calcAvg(44, 23, 71);
let avgKoalas = calcAvg(65, 54, 49);
console.log(`the avgScore of Dolphins "${avgDolphins}"`);
console.log(`the avgScore of Koalas "${avgKoalas}"`);


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win the match")
    } else if (avgKoalas >= 2 * avgKoalas) {
        console.log("Koalas win the match")
    } else {
        console.log("None of them win the match")
    }
};

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAvg(85, 54, 41);
avgKoalas = calcAvg(23, 34, 27);
console.log(`the avgScore of Dolphins "${avgDolphins}"`);
console.log(`the avgScore of Koalas "${avgKoalas}"`);
checkWinner(avgDolphins, avgKoalas);
