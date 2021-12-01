const { input } = require('./io');

let count = 0;
for (let i = 1; i < input.length; i++) {
    const previous = input[i - 1];
    const actual = input[i];

    if (actual > previous) {
        count++;
    }
}

console.info(`${count} measurements are higher!`);