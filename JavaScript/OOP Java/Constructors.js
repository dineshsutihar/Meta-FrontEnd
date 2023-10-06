//Constructors in JavaScript

//Constructor is a special type of function which is used to initialize the newly created object once memory is allocated for it. It is a special type of method which is used to initialize the object.

//Types of Constructors in JavaScript

//Default Constructor
//Parameterized Constructor
//Copy Constructor
//custom Constructor

//Default Constructor
//Default constructor is the constructor which does not take any argument. It has no parameters. It is used to initialize the instance variables of the class with the default values. It is invoked at the time of object creation.

//Example of Default Constructor in JavaScript
class Bird{
    constructor(){
        console.log("This is default constructor");
    }
}
var bird1 = new Bird(); //This is default constructor

//Parameterized Constructor
//Parameterized constructor is the constructor which takes a number of parameters. It is used to provide different values to the distinct objects. It is invoked at the time of object creation.

//Example of Parameterized Constructor in JavaScript
class Bird1{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}
var bir = new Bird1("Parrot", "Green");
console.log(bir.name); //Parrot

//Copy Constructor
//Copy constructor is the constructor which initializes an object using another object of the same class. It is used to create a copy of an object. It is invoked at the time of object creation.

//Example of Copy Constructor in JavaScript
class Bird2{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    display(){
        console.log(this.name + " " + this.color);
    }
}
var bird2 = new Bird2("Parrot", "Green");
bird2.display(); //Parrot Green


//Custom Constructor
//Custom constructor is the constructor which is used to initialize the instance variables of the class with the provided values. It is invoked at the time of object creation.

//Example of Custom Constructor in JavaScript
class Bird3{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    display(){
        console.log(this.name + " " + this.color);
    }
}
var bird3 = new Bird3("Parrot", "Green");
bird3.display(); //Parrot Green


//Custom Constructor function
function Icecream(flavor){
    this.flavor = flavor;
    this.meltIt = function(){
        console.log('The ${this.flavor} icecream is melting');
    }
}
let kiwiIcecream = new Icecream('kiwi');
let chocolateIcecream = new Icecream('chocolate');
let appleIcecream = new Icecream('apple');
kiwiIcecream.meltIt(); //The kiwi icecream is melting
chocolateIcecream.meltIt(); //The chocolate icecream is melting
appleIcecream.meltIt(); //The apple icecream is melting
