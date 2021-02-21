function addNumber(num1, num2) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num
        
    }
    return sum;
}
let result = addNumber(20, 40, 12, 5, 7, 9);
console.log(result);