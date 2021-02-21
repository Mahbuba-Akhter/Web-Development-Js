// let inch = 120;
// let feet = inch / 12;

function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;
}
let result = inchToFeet(145);
console.log(result);
let naniFeet = inchToFeet(165);
console.log(naniFeet);

function inchFeet(nums) {
    let totalFeet = nums / 12;
    return totalFeet;
}
let output = inchFeet(545);
console.log(output);