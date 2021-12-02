const { input } = require('./io');

let horizontal = 0;
let depth = 0;

input.forEach(({type, amount}) => {
    switch (type) {
        case "up":
            depth -= amount;
            break;
        case "down":
            depth += amount;
            break;
        case "forward":
            horizontal += amount;
            break;
        default:
            console.error("You mess it :( ");
            throw new Error(`You mess it :( . ${type} not allowed`);
    }
});

console.info(`The result is: ${horizontal*depth}`)