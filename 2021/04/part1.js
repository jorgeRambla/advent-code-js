const { input } = require("./io");

let bingo;
for (const number of input.drawnNumbers) {
  console.log(number);
  for (const board of input.boards) {
    board.markNumber(number);
    if (board.hasBingo()) {
      bingo = board;
      break;
    }
  }

  if (bingo) {
    break;
  }
}

console.log(bingo.getResult());
