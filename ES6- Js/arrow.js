// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);

// variable a function
// const doubleIt = function (num) {
//     return num * 3;
// }

// varible + parameter + => body + return value = arrow function;
const doubleIt = num => num * 4;
const result = doubleIt(3);
console.log(result);

// 2ta parameter er jonne bracket dite hobe tarpor rule same

const add = (num1, num2) => num1 + num2;
const total = add(10, 20);
console.log(total);

// empty parameter hole 

const empty = () => 5;
const output = empty();
console.log(output);

// multiLine arrow function er jonne {} likte hobe tobe tokon return value set kore dite hobe

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const total = sum * diff;
    return total;
}
const result2 = doMath(7, 5)
console.log(result2);

const myBudget = (phone, laptop) => {
    const budget = phone + laptop;
    const finalBudget = phone - laptop;
    const total2 = budget * finalBudget;
    return total2
}
const result3 = myBudget(100, 50);
console.log(result3);

const loveCal = (t, m) => {
    const yes = t + m;
    const no = t - m;
    const final = yes * no;
    return final;
}
const positive = loveCal(10, 100);
console.log(positive);

const forTwo = (one, two) => one * two;
const total4 = forTwo(5, 10);
console.log(total4);

const forOne = only => only + 100;
const total5 = forOne(100);
console.log(total5);