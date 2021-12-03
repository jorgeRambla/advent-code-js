const { input } = require("./io");

const requiredArea = input
  .map(({ length, width, height }) => {
    const side1 = width * length;
    const side2 = width * height;
    const side3 = length * height;

    return 2 * side1 + 2 * side2 + 2 * side3 + Math.min(side1, side2, side3);
  })
  .reduce((a, b) => a + b, 0);

console.info(`Santa requires ${requiredArea} squares feet of wrapping paper!`);
