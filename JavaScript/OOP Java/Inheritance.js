//Inheritance concept in JavaScript
//Inheritance is a concept in which some properties of one object can be inherited by other objects.

//Example of Inheritance in JavaScript
//Parent class
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    drive() {
        console.log("Driving");
    }
}
class Toyota extends Car {
    logColor() {
        console.log("Color is: " + this.color);
    }
}
let car = new Toyota("red", 100);
console.log(car.color); //red

//Another example of Inheritance in JavaScript

//Parent class
class Dog {
    constructor(name) {
        this.name = name;
        console.log(this.name + " is a dog");
    }
    eat() {
        console.log(this.name + " is eating");
    }
}
//Child class
class BullDog extends Dog {
    constructor(name) {
        super(name);
        console.log(this.name + " is a bulldog");
    }
    eat() {
        console.log(this.name + " is eating");
    }
}

let dog = new BullDog("Tommy");
dog.eat(); //Tommy is eating