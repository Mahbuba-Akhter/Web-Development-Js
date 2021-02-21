let money = 20;
money = 12;

const name = 'Mahbuba';

const person= {
    name: 'kuddus',
    age: 55,
    city: 'Dhaka'
}
const statement = `this person ${person.name} with age ${person.age}`;
console.log(statement);


// condition
let num = 10
if (num > 5) {
    console.log('condition is true');   
} else {
    console.log('condition is false');
}

// array

const numbers = [12, 13, 14, 15, 16, 17, 18, 19];
console.log(numbers[3]);
const friends = ['Tabassum', 'Hanna'];
console.log(friends);

// loop
const nums = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log(element);
    
}

// function

function add(num1, num2) {
    return num1 + num2;
}
const total = add(25, 30);
console.log(total);

// arrow function

const add2 = (num3, num4) => num3 + num4;
const result = add2(100, 200);
console.log(result);

const fiveTimes = number => number * 5;
console.log(fiveTimes);

const doMath = (x, y) => {
    const sum = x + y;
    return sum * 2;
}
const output = doMath(10, 30);
console.log(output);