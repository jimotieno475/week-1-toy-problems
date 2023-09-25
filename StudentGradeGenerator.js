const min = 0;
const max = 100;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const randomValue = getRandomArbitrary(min, max);

const grade =
  randomValue > 79
    ? "A"
    : randomValue >= 60
    ? "B"
    : randomValue >= 50
    ? "C"
    : randomValue >= 40
    ? "D"
    : "E";

console.log(`Random Value: ${randomValue}`);
console.log(`Corresponding Grade: ${grade}`);