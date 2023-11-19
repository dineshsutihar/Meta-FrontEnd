
//Array are iterable objects
var veggies=["onion","parsley","carrot"];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

console.log("***************");

//string are iterable objects
var name = "John";
console.log(name.length);
console.log(name[0]);
console.log(name[1]);

for (var i = 0; i < name.length; i++) {
    console.log(name[i]);
}

console.log("***************");

//string !== array
var name = "John";
var user='lisa';
//console.log(name.pop());

console.log(name + user);

console.log(name.concat(user));

console.log("***************");