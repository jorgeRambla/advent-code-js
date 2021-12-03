const { input } = require("./io");

let oxygen = "";
let oxygenSearch = input;
let co2 = "";
let co2Search = input;

for (let index = 0; index < input[0].length; index++) {
  if (oxygenSearch.length === 1) {
    oxygen = oxygenSearch[0];
  } else if (oxygenSearch.length === 2) {
    if (oxygenSearch[0].split("")[0] === "1") {
      oxygen = oxygenSearch[1];
    } else {
      oxygen = oxygenSearch[0];
    }
  } else {
    const zeros = oxygenSearch.filter((item) => item[index] === "0");
    const ones = oxygenSearch.filter((item) => item[index] === "1");

    if (ones.length >= zeros.length) {
      oxygenSearch = ones;
    } else {
      oxygenSearch = zeros;
    }
  }

  if (co2Search.length === 1) {
    co2 = co2Search[0];
  } else if (co2Search.length === 2) {
    if (co2Search[0].split("")[0] === "1") {
      co2 = co2Search[0];
    } else {
      co2 = co2Search[1];
    }
  } else {
    const zeros = co2Search.filter((item) => item[index] === "0");
    const ones = co2Search.filter((item) => item[index] === "1");

    if (zeros.length <= ones.length) {
      co2Search = zeros;
    } else {
      co2Search = ones;
    }
  }
}

console.info(`The result is: ${parseInt(oxygen, 2) * parseInt(co2, 2)}`);
