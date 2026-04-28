function calculateAverage(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length
}

function sum(number1, number2) {
  return number1 + number2
}

module.exports = {calculateAverage, sum};
 