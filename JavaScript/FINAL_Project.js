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
        console.log(`Dish: ${dish.name}, Price: $${finalPrice.toFixed(2)}`);
    }
}

// Implement getDiscount()
function getDiscount(guests) {
    getPrices(true); // Assume tax is applied
    
    if (guests >= 5 && guests <= 10) {
        console.log('Discount: 10%');
    } else if (guests > 10) {
        console.log('Discount: 15%');
    } else {
        console.log('No additional discount');
    }
}

// Call getDiscount() with number of guests
getDiscount(8);
