const numbers = [54, 56, 76, 83, 20, 30];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// array destructuring
numbers.push(100);
const [x, y] = [54, 56];
console.log(x, y);

function boxify(num1){
    return [num1, num1 + 5];
}
const boxed = boxify(8);
console.log(boxed);

// Object  Destructuring

const person /*{name, age, id}*/ = {id: 2, money: 34, name: 'Rahim', age: 25};
const {money} = person;
// console.log(name, age, id);
console.log(money);

// create object shortcut

const one = 25;
const two = 35;
const obj = {one: one, two: two};
const obj2 = {one, two};
console.log(obj2);

//create new array using three dots ...

const newNumbers = [...numbers, 56];
console.log(newNumbers);