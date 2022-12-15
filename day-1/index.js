//https://adventofcode.com/2022/day/1

const fs = require("fs");

const fileContent = fs.readFileSync("data.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);

let calories = 0;
const caloriesBags = [];

fileLines.forEach((line) => {
  if (line === "") {
    caloriesBags.push(calories);
    calories = 0;
  }

  calories += Number(line);
});

caloriesBags.sort((a, b) => b - a);

let threeTotalCalories = 0;
caloriesBags.some((c, idx) => {
  console.log(c);
  threeTotalCalories += c;
  if (idx === 2) {
    return true;
  }
});

console.log(threeTotalCalories);
