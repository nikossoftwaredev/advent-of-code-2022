//https://adventofcode.com/2022/day/4

const fs = require("fs");

const fileContent = fs.readFileSync("data.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);

const isOverlapping = (fromA, toA, fromB, toB) => {
  if (fromA >= fromB && toA <= toB) {
    return true;
  }

  if (fromB >= fromA && toB <= toA) {
    return true;
  }

  return false;
};

let sum = 0;
fileLines.forEach((line) => {
  const [a, b] = line.split(",");

  const [fromA, toA] = a.split("-");
  const [fromB, toB] = b.split("-");

  const value = isOverlapping(
    Number(fromA),
    Number(toA),
    Number(fromB),
    Number(toB)
  );
  sum += Number(value);
});

console.log(sum);
