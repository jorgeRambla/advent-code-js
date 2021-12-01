const { input } = require('./io');

let count = 0;
for (let i = 1; i < input.length - 2; i++) {
    const previous = input[i - 1];
    const actual = input[i];
    const next = input[i + 1];
    const next2 = input[i + 2];

    if ((actual + next + next2) > (previous + actual + next)) {
        count++;
    }
}

console.info(`${count} measurements are higher in three mesaurements range!`);