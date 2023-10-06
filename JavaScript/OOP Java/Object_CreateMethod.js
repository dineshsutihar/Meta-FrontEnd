//Object.create() method
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
//Syntax: Object.create(proto, [propertiesObject])

//Parameters:
//proto: The object which should be the prototype of the newly-created object.
//propertiesObject: Optional. If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of Object.defineProperties().
//Return value: A new object with the specified prototype object and properties.
//Exceptions: A TypeError, if the proto parameter isn't null or an object.
//Description: Object.create() creates a new object with the specified prototype object and properties.

//Example 1: Using Object.create() to create a new object

// simple object with some properties
var coder = {
    canCode: true,
    canCook: false
};

// Object.create() method
var me = Object.create(coder);
console.log(me.canCode); // true

//Example 2: Using Object.create() in classes

// parent class
class Coder {
    constructor(canCode) {
        this.canCode = canCode;
    }
}

// child class
class Frontend extends Coder {
    constructor(canCode, framework) {
        super(canCode);
        this.framework = framework;
    }
}   

// using Object.create() method
var me = Object.create(new Frontend(true, 'Angular'));
console.log(me.canCode); // true