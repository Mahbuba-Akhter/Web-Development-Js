// special keyword a ' cotation' deya lage na
// je value bar bar use hoy sekulu let a rakte hobe
// jegulu r use kora hobe na eigula const

// let name = 'Mahbuba';
// let myName = 'Akher';
// // camel case
// console.log(name + ' '+ myName);

// let num1 = 100;
// let num2 = 30;
// console.log(num1 * num2); 
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2 );
// console.log(num1 % num2);


// uppercase and lowercase the output

let promise = 'Insha-allah I Will Become A Programmer One Day';
promise.toLowerCase()
console.log(promise.toLowerCase());
promise.toUpperCase()
console.log(promise.toUpperCase());

// indexof diye positon ber kora hhoy

 console.log(promise.indexOf('will'));  /*-1 means there is no words like this because i mistake*/
 console.log(promise.indexOf('A'));

//  vag korar jonne split korte hoy

console.log(promise.split('I'));
console.log(promise.split(' '));

// doshomik number ke floating bole

let number1 = 50;  /* integer Number */
let number2 = 12.45425 /* floating Number */
console.log(number1 + number2);

// 2ta number jug korle number output hoy but usere kach theke input nile seta string akare ase. string r number jug hole 2ta pasapai boshe
let num1 = 50;
let num2 = '20.45';


// number string er bitor takle number a convert korte hoy
// num2 = parseFloat(num2);  eita use kora valo
// purno sonkka korar jonne
// num2 = parseInt(num2);
num1 = '' + num2 /* string a convert hoy empty string add korle */
console.log(num1 + num2);

let funny1 = 0.1;
let funny2 = 0.2;
// console.log(funny1 + funny2);
// koto decimal jave seta korte total ke fix korte hobe
let total = funny1 + funny2;
total = total.toFixed(1)
console.log(total);

// mathematical operations
// Arithmetic operations
// 1. + Addition
// 2. - Subtraction
// 3. * Multiplication 
// 4. / Division
// 5. % Reminder
// == mane 1 barao / ++ mane 1 barai deya/ -- maen ek kombe
let price1 = 50;
let price2 = 30;
price2 ++
// console.log(price2);
console.log(price1 + price2);

// white space dile ' ' space ase 2ta variable er modde
let firstName = 'Mahuba';
let lastName = 'Akhter';
let result = firstName + ' ' + lastName;
console.log(result);

// math absolute means number negative thakuk or positive sudhu result show korbe means negative holeo positive result dibe...
let numb = -5;
var absoluteNumber = Math.abs(numb);
console.log(absoluteNumber);

// round korle doshomiker por .5 thakle 1 barabe r jodi .5 er kom hoy tahole ek komabe
// let numbers = 5.4543
let numbers = 5.5345;
let output = Math.round(numbers);
console.log(output);

// ceiling mane upore utay nibe. point beshi huk r kom
var one = 5.3214;
var celing = Math.ceil(one);
console.log(celing);

// floor mane niche namano pont beshi huk r kom se purno songka bananur jonne point komiye felbe

let two = 5.98675;
let floorExample = Math.floor(two);
console.log(floorExample);

// random means number change hoye ashbe ektar por arekta

let randomNumber = Math.random() * 100;
let totalResult = Math.round(randomNumber);
console.log(totalResult);
