//new Date() - returns the current date and time
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());

//Error() - creates an error object
console.log(new Error());
console.log(new Error( ).message);
console.log(new Error().name);
console.log(new Error().stack);

//new map() - creates a new map object
console.log(new Map());
console.log(new Map().size);
console.log(new Map().has("name"));
console.log(new Map().get("name"));
console.log(new Map().set("name", "John"));
console.log(new Map().delete("name"));
console.log(new Map().clear());


//new Promise() - creates a new promise object
// console.log(new Promise());
// console.log(new Promise().then());
// console.log(new Promise().catch());
// console.log(new Promise().finally());

//new Set() - creates a new set object
console.log(new Set());
console.log(new Set().size);
console.log(new Set().has("name"));
console.log(new Set().add("name"));
console.log(new Set().delete("name"));
console.log(new Set().clear());


//new WeakMap() - creates a new weakmap object
console.log(new WeakMap());
console.log(new WeakMap().size);
console.log(new WeakMap().has("name"));
console.log(new WeakMap().get("name"));
console.log(new WeakMap().set("name", "John"));
console.log(new WeakMap().delete("name"));

//new WeakSet() - creates a new weakset object
console.log(new WeakSet());
console.log(new WeakSet().size);
console.log(new WeakSet().has("name"));
console.log(new WeakSet().add("name"));
console.log(new WeakSet().delete("name"));
console.log(new WeakSet().clear());
