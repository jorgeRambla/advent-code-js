const { input } = require('./io');

let aim = 0;
let horizontal = 0;
let depth = 0;

input.forEach(({type, amount}) => {
    switch (type) {
        case "up":
            aim -= amount;
            break;
        case "down":
            aim += amount;
            break;
        case "forward":
            horizontal += amount;
            depth += aim * amount;
            break;
        default:
            console.error("You mess it :( ");
            throw new Error(`You mess it :( . ${type} not allowed`);
    }
});

console.info(`The result is: ${horizontal*depth}`)