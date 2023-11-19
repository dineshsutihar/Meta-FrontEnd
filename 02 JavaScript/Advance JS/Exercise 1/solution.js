// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (item in dairy) {
        console.log(dairy[item]);
    }
}
logDiary();
// Task 2

const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key of Object.keys(bird)) {
        console.log(key + ": " + bird[key]);
    }
}
// Alternative solution
/*function birdCan() {
    for (const [key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`);
    }
}
 */

birdCan();


// Task 3
function animalCan() {
    for (const prop in bird) {
        console.log (prop + ": " + bird[prop] )
    }
}

animalCan()
