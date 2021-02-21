const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);
// console.log(normalPerson);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Kalam',
    salary: 25000,
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Gulam',
    salary: 25000,
}

normalPerson.chargeBill.bind()