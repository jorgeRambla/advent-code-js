const { input } = require("./io");

let x = 0;
let y = 0;

const visitedCoords = [JSON.stringify({ x, y })];

input.forEach((direction) => {
  switch (direction) {
    case "^":
      y++;
      break;
    case "v":
      y--;
      break;
    case ">":
      x++;
      break;
    case "<":
      x--;
      break;
    default:
      console.error(`Direction ${direction} not allowed, is santa drunk?`);
      break;
  }

  visitedCoords.push(JSON.stringify({ x, y }));
});

const differentHouses = new Set(visitedCoords).size;

console.log(new Set(visitedCoords));

console.info(`Santa visited ${differentHouses} different houses!`);
