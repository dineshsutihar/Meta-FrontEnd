//Encapsulation in JavaScript
//Encapsulation is a concept in which we encapsulate all the data and functions inside a class.

//Example of Encapsulation in JavaScript
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
}
let student1 = new student("John", 20);
console.log(student1.getName()); //John
console.log(student1.getAge()); //20

//Another example of Encapsulation in JavaScript
class employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
}
let employee1 = new employee("John", 20);
console.log(employee1.getName()); //John