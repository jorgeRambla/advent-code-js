const path = require("path");
const fs = require("fs");
const { Board } = require("./Board");

const lines = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n\n");

const drawnNumbers = lines[0]
  .split(",")
  .map((element) => parseInt(element, 10));

const boards = [];
for (let i = 1; i < lines.length; i++) {
  boards.push(new Board(lines[i], i - 1));
}

const input = {
  drawnNumbers,
  boards,
};

module.exports = {
  input,
};
