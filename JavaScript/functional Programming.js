// Functional Programming

var currencyOne=100;
var currencyTwo=0;
var exchangeRate=1.2;

function converCurrency(amount,rate) {
    return amount*rate;
}
currencyTwo=converCurrency(currencyOne,exchangeRate);
console.log(currencyTwo);