


function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15

    }
    else {
        return bill * .2
    }
}

const bill = [125, 555, 44];
console.log(`These are the examples of Bill ${bill}`);
calcTip(100);

calcTip(bill[0]);
calcTip(bill[1]);
calcTip(bill[2]);

const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(`These are there respective tips ${tips}`);

const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(`These are there respective total ${total}`);
