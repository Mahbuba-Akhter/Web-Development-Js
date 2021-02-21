
function getArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;    
    }
    return sum;
}
let numbers = [33, 43, 56, 76, 86, 90, 23, 19];
let result = getArraySum(numbers);
console.log('total of the numbers:', result);

function getTotalPrice(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        const element = prices[i];
        total = total + element;
        
    }
    return total;
}
let output = getTotalPrice([450, 560, 980, 740, 340, 201]);
console.log(output);