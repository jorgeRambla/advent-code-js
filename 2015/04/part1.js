const crypto = require("crypto");
const secret = require("./input");

let index = 0;
let hash;
do {
  hash = crypto.createHash("md5").update(`${secret}${index}`).digest("hex");
  index++;
  if (index % 50 === 0) console.log(index);
} while (hash.substr(0, 5) !== "00000");

console.info(`Santa, i fount the secret number: ${index - 1}`);
