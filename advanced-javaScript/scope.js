// kunu 1ta function ke bitor theke declayer korle bair theke call kora jay na,,,,bt bitore call korle output ashbe

let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    console.log(result);
    return result;
}

const output = sum(3, 7);
console.log(output);
console.log(bonus);
// console.log(result);