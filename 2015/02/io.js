const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((line) => {
    const [length, width, height] = line.split("x");

    return {
      length: parseInt(length),
      width: parseInt(width),
      height: parseInt(height),
    };
  });

module.exports = {
  input,
};
