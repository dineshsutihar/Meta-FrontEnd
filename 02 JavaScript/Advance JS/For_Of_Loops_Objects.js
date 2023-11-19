//For of loops and objects
// As we know objects are not iterable, but we can use for of loop to iterate over the object.

// We can use 3 built-in methods to iterate over the object:

// Object.keys(obj) – returns an array of keys.

const car2 = {
    speed: 40,
    color: 'red',
}
console.log(Object.keys(car2)); // ['speed', 'color']


// Object.values(obj) – returns an array of values.

console.log(Object.values(car2)); // [40, 'red']


// Object.entries(obj) – returns an array of [key, value] pairs.

console.log(Object.entries(car2)); // [['speed', 40], ['color', 'red']]
//we will get an array of arrays, where each sub-array contains a key and a value.

// We can use for of loop to iterate over the object:
console.log("######## for of loop to iterate over the object:");
var clothingItems = {
    price: 100,
    color: 'red',
    material: 'cotton',
    season: 'summer',
    isAvailable: true
};
for (const key of Object.keys(clothingItems)) {
    console.log(key,":",clothingItems[key]);
}


// We can use for of loop to iterate over the object:
console.log("######## for of loop to iterate over the object:");
function testBracketsDynamicAccess(){
    var dynamicKey;
    if(Math.random() > 0.5){
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }
    var drone = {
        speed: 40,
        color: 'red'
    };

    console.log(drone[dynamicKey]); // 40 or 'red'
}

testBracketsDynamicAccess();