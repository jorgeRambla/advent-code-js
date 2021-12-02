const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((line) => {
        const [type, amount] = line.split(' ');

        return {
            type,
            amount: parseInt(amount, 10)
        }
    });

module.exports = {
    input
};