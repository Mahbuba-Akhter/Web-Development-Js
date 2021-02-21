const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const friends = ['rafiq', 'safq', 'jabbar', 'moshiur'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'phone', price: 100},
    {id: 3, name: 'watch', price: 50},
    {id: 4, name: 'pc', price: 20}
]

// Map

const names = products.map(product => product.name);
console.log(names);
const prices = products.map(pd => pd.price);
// console.log(prices);

// foreach

products.forEach(product => console.log(product.name));

// filter

const cheaper = products.filter(pd => pd.price < 100);
// console.log(cheaper);

// find
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);

// reduce  

// push
// pop
// length
// indexOf