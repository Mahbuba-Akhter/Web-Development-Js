let a = 5;
let b = 10;
// console.log('before swap:', 'a =', a, 'b =', b);
let temp = a;
a = b;
b = temp;
// console.log('after swap:', 'a =', a, 'b =', b);

let v = 10;
let s = 20;
[v, s] = [s, v];
console.log('after swap:', 'v =', v, 's =', s);

let m = 100;
let c = 500;
[m, c] = [c, m];
console.log(m, c);
