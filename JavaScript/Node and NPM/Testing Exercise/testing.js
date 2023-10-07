function concatStrings(a, b) {
    return a + b;
}
concatStrings(1,2); //3
concatStrings('1', '2'); // 12
concatStrings('1', 2); // 12
concatStrings(1, '2'); // 12

// Path: JavaScript/Node%20and%20NPM/testing.spec.js

//JEST - testing framework
except(concatStrings(1,2)).toBe(3)