var age=10;
if (age>65) {
    console.log("You get your income from your pension.")
} else if (age>=18 && age<=65) {
    console.log("Each month you get a salary.")
} else if (age<18) {
    console.log("You get an allowance.")
} else {
    console.log("The value of the age variable is not numeric.")
}

// switch task
var day="Sunday";
switch (day) {  
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("The value of the day variable is not a day of the week.");
        break;
}