//
const car = {
    engine: true,
    steering: true,
    speed: "Slow"
};
const sportCar = Object.create(car);
sportCar.speed = "Fast";
console.log("The sportCar object: ", sportCar);

console.log("---------for-of is unreliable ---------");
for (prop in sportCar) {
    console.log(prop);
}
console.log('🤔', "Iterating over object AND its prototype!");

console.log("---------for-in is reliable ---------");
for (prop of Object.keys(sportCar)) {
    console.log(prop + ": " + sportCar[prop]);
}
console.log('😎', "Iterating over object's OWN PROPERTIES ONLY!");