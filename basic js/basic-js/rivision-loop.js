// let marks = [23, 34, 56, 67, 78, 24, 86];

// for (let i = 0; i < marks.length; i++) {
//     const total = marks[i];
//     console.log(total);
// }

// function add(number1, number2) {
//     let result = number1 + number2;
//     return result; 
// }
// let showResult = add(50, 200);
// console.log(showResult);
// console.log('i am a stupid');
// console.log('i am not goog at anything');
// let totalResult = add(400, 100);
// console.log(totalResult);

// function biggestNumber(numbers) {
//     let bigger = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const largestNumber = numbers[i];
//         if (largestNumber > bigger) {
//             bigger = largestNumber;
//         }
        
//     }
//     return bigger;
// }
// let result = biggestNumber([24, 54, 67, 89, 90, 120]);
// console.log(result);

function largestName(names) {
    let allName = names[0];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (element > allName) {
            allName = element;
        }
    }
    return allName;
}
let output = largestName(['Hanna', 'sadia', 'Eva', 'Ripa', 'Tabassum']);
console.log(output);