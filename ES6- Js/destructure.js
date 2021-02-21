// objwct theke property
const person = { name: 'Jack William', age: 18, job: 'Facebook', gfName: 'Ema Watson', phone: 34141, address: 'Dhaka'};

const { phone, gfName, address } = person;
// const gfName = person.gfName;
// const phone = person.phone;

console.log(phone, gfName, address);

// array theke property

const friends = ['Sadia', 'Himu', 'Rimu', 'Timu', 'Simu', 'Limu'];
const[first, ...older] = friends;
console.log(first, older);

// kunu 1ta bishal object or variable theke 1/2 ta property ber kora holo destructure

const complexObject = {
    name: 'Ema',
    info:{
        address: 'Sylhet',
        leader: 'Mahbuba'
    }
}

const {leader} = complexObject.info;
console.log(leader);