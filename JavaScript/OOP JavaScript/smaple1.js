//OOP Sample in JavaScript

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes*purchase1.stateTax;
        console.log("Total Price is: "+calculation);   
    }
}
//Accessing the object
purchase1.totalPrice(); //Total Price is: 120 

//using this keyword in same example
var purchase2 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes*this.stateTax;
        console.log("Total Price is: "+calculation);   
    }
}
//Accessing the object
purchase2.totalPrice(); //Total Price is: 120