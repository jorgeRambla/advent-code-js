const { input } = require("./io");
const vowels = /[aeiou]/g;
const validateRegex = /(\w)\1+/;
const forbiddenChars = /(ab|cd|pq|xy)/g;

const result = input
  .filter((element) => (element.match(vowels) || []).length >= 3)
  .filter((element) => element.match(validateRegex))
  .filter((element) => !element.match(forbiddenChars));

console.info(`There are ${result.length} nice strings!`);
