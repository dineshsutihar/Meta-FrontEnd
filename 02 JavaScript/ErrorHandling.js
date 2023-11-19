// sample of bug and error handling

//console.log(a+b);

console.log("This line will now run");

console.log("#######################");


//types of errors
//1. Syntax Error
//2. Runtime Error
//3. Logical Error

//1. Syntax Error
//console.log("Hello World);


//2. Runtime Error
//console.log(a+b);


//3. Logical Error
//var a=10;
//var b=20;
//console.log(a+b);


//try catch block
try{
    console.log("Hello World");
    console.log(a+b);
}catch(error){
    console.log("Error Occured");
    //console.log(error);
}

console.log("This line will now run");

console.log("#######################");

//try catch block
try{
    console.log("Hello World");
    console.log(a+b);
}
catch(error){
    console.log("Error Occured");
    //console.log(error);
}
finally{
    console.log("This is finally block");
}

console.log("This line will now run");

console.log("#######################");

//try throw block
try{
    console.log("Hello World");
    console.log(a+b);
    throw new Error("This is an error");
}
catch(error){
    console.log("Error Occured");
    //console.log(error);
    
}
finally{
    console.log("This is finally block");
}

