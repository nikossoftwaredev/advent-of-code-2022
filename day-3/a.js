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
fileLines.forEach((line) => {
  const firstHalf = line.substring(0, line.length / 2).split("");
  const secondHalf = line.substring(line.length / 2).split("");

  const commonLetter = firstHalf.find((c) => secondHalf.some((c2) => c2 === c));

  const value = getCommonLetterPoints(commonLetter);
  sum += value;
});

console.log(sum);
