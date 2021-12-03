const { input } = require("./io");

const requiredRibbonArea = input
  .map(({ length, width, height }) => {
    const wrapSide1 = length * 2 + width * 2;
    const wrapSide2 = length * 2 + height * 2;
    const wrapSide3 = height * 2 + width * 2;
    const bow = length * height * width;

    return Math.min(wrapSide1, wrapSide2, wrapSide3) + bow;
  })
  .reduce((a, b) => a + b, 0);

console.info(`Santa requires ${requiredRibbonArea} squares feet of ribbon!`);
