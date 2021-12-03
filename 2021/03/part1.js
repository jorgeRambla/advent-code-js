const { input } = require("./io");

let gamma = "";

for (let index = 0; index < input[0].length; index++) {
  const zeros = input.filter((item) => item[index] === "0").length;

  if (zeros > input.length / 2) {
    gamma = gamma + "0";
  } else {
    gamma = gamma + "1";
  }
}

let epsilon = gamma
  .split("")
  .map((binary) => (binary === "0" ? "1" : "0"))
  .join("");

console.info(`The result is: ${parseInt(gamma, 2) * parseInt(epsilon, 2)}`);
