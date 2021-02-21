class Parent {
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' '  + this.fatherName;
    }
}

const baby = new Child('Arnoid');
const baby2 = new Child ('Tom');
console.log(baby.getFullName());
console.log(baby, baby2);