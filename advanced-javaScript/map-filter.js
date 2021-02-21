const numbers = [3, 4, 5, 6, 7, 8, 9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// const result = numbers.map(function(element, index, Array){
//     // console.log(element, index, Array);
//     return element * element
// })
// console.log(result);
// console.log(output);

const bigger = numbers.filter( x => x > 5);
console.log(bigger);
const isThere = numbers.find( x => x > 5);
console.log(isThere);
