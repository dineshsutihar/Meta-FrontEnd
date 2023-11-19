const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times 2', () => {
    const inputNumber = 10;
    const expectedResult = 20;

    const result = timesTwo(inputNumber);

    expect(result).toBe(expectedResult);
});
