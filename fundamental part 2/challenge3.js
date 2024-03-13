
const abhishek = {
    fullName: "Abhishek Kushwaha",
    mass: 82,
    height: 1.78,
    calcBMI: function () {
        const BMI = this.mass / (this.height ** 2)
        return BMI;
    },
}


const tanmay = {
    fullName: "Tanmay Verma",
    mass: 72,
    height: 1.70,
    calcBMI: function () {
        const BMI = this.mass / (this.height ** 2)
        return BMI;
    }
}

console.log(abhishek.calcBMI());
console.log(tanmay.calcBMI());
if (abhishek.calcBMI() > tanmay.calcBMI()) {
    console.log(`The BMI of ${abhishek.fullName} is ${abhishek.calcBMI()} is greater than the BMI of ${tanmay.fullName} ${tanmay.calcBMI()}`)
} else if (abhishek.calcBMI() < tanmay.calcBMI()) {
    console.log(`The BMI of ${tanmay.fullName} ${tanmay.calcBMI()} is greater than the BMI of ${abhishek.fullName} is ${abhishek.calcBMI()} `)
}
else {
    console.log(`The BMI of ${tanmay.fullName} ${tanmay.calcBMI()} is is equal to the BMI of ${abhishek.fullName} is ${abhishek.calcBMI()} `)
}
