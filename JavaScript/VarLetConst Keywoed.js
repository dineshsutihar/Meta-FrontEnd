//var keyword   
// var keyword is used to declare a variable in javascript
// var keyword is function scoped
// var keyword can be redeclared and updated
// var keyword can be hoisted
// var keyword can be declared without initialization
// var keyword can be declared in global scope
// var keyword can be declared in local scope
// var keyword can be declared in function scope
// var keyword can be declared in block scope
//example:
var a=10;
function example(){
    var a=20;
    console.log(a);
}
example();
console.log(a);

//let keyword
// let keyword is used to declare a variable in javascript
// let keyword is block scoped
// let keyword can be updated but not redeclared
// let keyword can be hoisted
// let keyword can be declared without initialization
// let keyword can be declared in global scope
// let keyword can be declared in local scope
// let keyword can be declared in function scope
// let keyword can be declared in block scope
//example:
let b=10;
function example(){
    let b=20;
    console.log(b);
}
example();
console.log(b);


//const keyword
// const keyword is used to declare a variable in javascript
// const keyword is block scoped
// const keyword can not be updated and redeclared
// const keyword can be hoisted
// const keyword can not be declared without initialization
// const keyword can be declared in global scope
// const keyword can be declared in local scope
// const keyword can be declared in function scope
// const keyword can be declared in block scope
//example:
const c=10;
function example(){
    const c=20;
    console.log(c);
}
example();
console.log(c);
