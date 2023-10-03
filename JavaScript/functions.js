//Basic function syntax
function sayHello() {
    console.log("Hello");
}
sayHello(); //calling the function

//adding 2 numbers
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(5, 4);

//returning a value
function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5, 4));

//multiply 2 numbers
function multiplyNums(num1, num2) {
    return num1 * num2;
}   
console.log(multiplyNums(5, 4));

//swap 2 numbers without using a temp variable
function swapNums(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    console.log("num1 is " + num1 + " and num2 is " + num2);
}
swapNums(5, 4);

//swap 2 numbers wihout a temp variable and using bitwise operator
function swapNums(num1, num2) {
    num1 = num1 ^ num2;
    num2 = num1 ^ num2;
    num1 = num1 ^ num2;
    console.log("num1 is " + num1 + " and num2 is " + num2);
}
swapNums(5, 4);