const { input } = require('./io');

let floor = 0;
let index = 0;

input.some((item, i) => {
    item === "(" ? floor++ : floor--

    if (floor === -1) {
        index = i;
        return true;
    }

    return false;
});

console.info(`Santa is in floor ${floor} in index ${index + 1}`);