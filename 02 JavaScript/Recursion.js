// Recursion in javascript

let counter=3;
function example() {
    console.log(counter);
    counter--;
    if (counter===0){
        return;
    }
    example();
}
example();