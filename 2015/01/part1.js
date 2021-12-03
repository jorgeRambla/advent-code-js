const { input } = require('./io');

let floor = 0;

input.forEach((item) => item === "(" ? floor++ : floor--);

console.info(`Santa is in floor ${floor}!`);