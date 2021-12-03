const { input } = require("./io");

let santa_x = 0;
let santa_y = 0;

let robot_x = 0;
let robot_y = 0;

const visitedCoords = [JSON.stringify({ x: santa_x, y: santa_y })];

input.forEach((direction, index) => {
  const addX = (x, index) => {
    if (index % 2 === 0) {
      santa_x += x;
    } else {
      robot_x += x;
    }
  };

  const addY = (y, index) => {
    if (index % 2 === 0) {
      santa_y += y;
    } else {
      robot_y += y;
    }
  };

  switch (direction) {
    case "^":
      addY(1, index);
      break;
    case "v":
      addY(-1, index);
      break;
    case ">":
      addX(1, index);
      break;
    case "<":
      addX(-1, index);
      break;
    default:
      console.error(`Direction ${direction} not allowed, is santa drunk?`);
      break;
  }

  visitedCoords.push(JSON.stringify({ x: santa_x, y: santa_y }));
  visitedCoords.push(JSON.stringify({ x: robot_x, y: robot_y }));
});

const differentHouses = new Set(visitedCoords).size;

console.log(new Set(visitedCoords));

console.info(
  `Santa and the robot visited ${differentHouses} different houses!`
);
