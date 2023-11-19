// Working with template literals

//ES5 Strings

let noMultiLine = "No multi-line string in ES5.";
console.log("Did you Know? " + noMultiLine);

//ES6 Strings
//Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes.
let multiLine = `This is 
 a multi-line 
 string in 
 ES6.
 `;//we can use back-tick (` `) to create multi-line strings.
console.log(multiLine);

//ES6 variable interpolation
console.log(`${noMultiLine} But there is in ES6! ${multiLine}`);//we can use ${} to interpolate variables into strings.