// let totalAnimal = [12, 23, 15, 16, 25, 29,]
// let sum = 0;
// for (let i = 0; i < totalAnimal.length; i++) {
//     const element = totalAnimal[i];
//     sum = element + sum;
// }
// console.log(sum);

function animalCalculator (depth){
let animal = 0;
if (depth <= 10) {
    animal = depth * 50;
}
else if (depth <= 20) {
    let firstPart = 10 * 50;
    let remaining = depth - 10;
    let secondPart = remaining * 100;
    animal = firstPart + secondPart;
}
else{
    let firstPart = 10 * 50;
    let secondPart = 10 * 100;
    let remaining = depth - 20;
    let thirdPard = remaining * 300;
    animal = firstPart + secondPart + thirdPard;
    }
    return animal;
}
let result = animalCalculator(22);
console.log(result);