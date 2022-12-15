//https://adventofcode.com/2022/day/2

const fs = require("fs");

const fileContent = fs.readFileSync("data.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);

const getCommonLetterPoints = (s) => {
  const isUpperCase = s === s.toUpperCase();
  let value = s.toLowerCase().charCodeAt(0) - 96;

  return isUpperCase ? value + 26 : value;
};

let sum = 0;
let letters = {};

fileLines.forEach((line, idx) => {
  [...new Set(line.split(""))].forEach((letter) => {
    letters[letter] = letters[letter] ? letters[letter] + 1 : 1;
  });

  if ((idx + 1) % 3 === 0) {
    Object.keys(letters).map((key) => {
      if (letters[key] === 3) {
        sum += getCommonLetterPoints(key);
      }
    });

    letters = {};
  }
});

console.log(sum);
