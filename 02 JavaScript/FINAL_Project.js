// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
];
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (const dish of dishData) {
        let finalPrice;
        if (taxBoolean) {
            finalPrice = dish.price * tax;
        } else {
            finalPrice = dish.price;
        }
        console.log(`Dish: ${dish.name} Price: $${finalPrice.toFixed(2)}`);
    }
}


// Implement getDiscount()
function getDiscount(booltext,guests) {
    getPrices(booltext); // Assume tax is applied

    if (typeof guests === 'number' && guests >= 0 && guests <= 30) {
        let discount = 0;

        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5 && guests <= 10) {
            discount = 10;
        } else if (guests > 10) {
            discount = 15;
        }

        console.log(`Discount is: $${discount}`);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}


//test 1
// Call getDiscount() with number of guests
getDiscount(true, 2)
getDiscount(false, 10)