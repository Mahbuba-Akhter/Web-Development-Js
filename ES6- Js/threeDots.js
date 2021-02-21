const ages = [11, 12, 13, 15, 18, 17];
const ages2 = [34, 23, 54, 21, 78];
const ages3 = [1, 2, 4, 3, 5, 6, 7, 8]
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ... ages2, 5, ...ages3];
console.log(allAges2);
console.log(allAges);

// for max

const business = 650;
const sochib = 500;
const minister = 700;
// const maximum = Math.max(business, sochib, minister);
// console.log(maximum);

// jodi array modde thake

const takaPoysha = [200, 400, 600, 800];
const maxNumber = Math.max(...takaPoysha);
console.log(maxNumber);