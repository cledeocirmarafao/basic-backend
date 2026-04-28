const { calculateAverage, sum } = require("./average");

const numbers = [2, 4, 6, 8, 10];
const average = calculateAverage(numbers);
console.log(`A média dos números ${numbers} é ${average}`);

const number1 = 2
const number2 = 5
const result = sum(number1, number2)
console.log(result);
