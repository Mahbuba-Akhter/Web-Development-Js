class student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Govt. School, Dhaka';
    }

}

const student1 = new student(1, 'Riya');
const student2 = new student(2, 'Mahir');
console.log(student1.name, student2.name);