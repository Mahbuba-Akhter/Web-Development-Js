let person1 = 450;
let person2 = 300;
if (person1 > person2) {
    console.log('person one is bigger');
} else {
    console.log('person tow is bigger');
}

// for three value

let mobilePrice = 500;
let ipadPrice = 700;
let laptopPrice = 900;

let max = Math.max(mobilePrice, laptopPrice, ipadPrice);
console.log(max);
// if (mobilePrice > ipadPrice) {
//     if (mobilePrice > laptopPrice) {
//         console.log('this is true');
//     }
//     else{
//         console.log('this is false');
//     }
// } 
// else {
//     if (ipadPrice > laptopPrice) {
//         console.log('i will buy laptop');
//     } else {
//         console.log('i will buy ipad');
//     }
// }

let friends = 500;
let friends2 = 600;
let friends3 = 700;
let friends4 = 1000;
let result = Math.max(friends, friends2, friends3, friends4);
console.log(result);