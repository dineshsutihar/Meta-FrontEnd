//If else statement
var result =50;
if(result>40){
    console.log("Congratulation you have passed the exam");
} else{
    console.log("Sorry you have failed the exam");
}

//If else if statement
var food ="hot";
if(food=="hot"){
    console.log("Too hot");
}
else if(food=="cold"){
    console.log("Too cold");
}
else{
    console.log("Just right");
}

//Switch statement

var place="first";
switch(place){
    case "first":
        console.log("You came in first place");
        break;
    case "second":
        console.log("You came in second place");
        break;
    case "third":
        console.log("You came in third place");
        break;
    default:
        console.log("You did not place");
        break;
}