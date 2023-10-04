//typeof operator

var a = 10;
console.log(typeof a); // number

var b = "Hello";
console.log(typeof b); // string

var c = true;
console.log(typeof c); // boolean

var d = {};
console.log(typeof d); // object

var e = [];
console.log(typeof e); // object

console.log(Object.prototype.toString.call(e)); // [object Array]

function Person(name) {
    this.name = name;
}

var f = new Person('Jane');
console.log(typeof f); // object