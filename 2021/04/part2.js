const { input } = require("./io");

let bingo;
for (const number of input.drawnNumbers) {
  for (const board of input.boards) {
    if (!board.hasBingo()) {
      board.markNumber(number);
      if (board.hasBingo()) {
        bingo = board;
      }
    }
  }
}

console.log(bingo.getResult());
