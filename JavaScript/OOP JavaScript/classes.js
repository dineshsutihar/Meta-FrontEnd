//classes are a template for creating objects
//they encapsulate data with code to work on that data
//classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics


//class declarations
class Car {
    constructor(color, speed) { //constructor method is a special method for creating and initializing an object created with a class
        this.color = color;
        this.spped = speed;
    }
    drive() {
        console.log("Driving");
    }
}

let car = new Car("red", 100);
console.log(car.color); //red
console.log(car.speed); //100
car.drive(); //Driving

//Another example of class declaration
class Car {
    constructor(color, speed) {
        this.color = color;
        this.spped = speed;
    }
    drive() {
        console.log("Driving");
    }
}

let car1 = new Car("red", 100);
console.log(car1.color); //red
console.log(car1.speed); //100
car1.drive(); //Driving
