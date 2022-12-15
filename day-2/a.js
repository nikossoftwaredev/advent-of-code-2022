//https://adventofcode.com/2022/day/2

const fs = require("fs");

const fileContent = fs.readFileSync("data.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);

const LOSE_POINTS = 0;
const DRAW_POINTS = 3;
const WIN_POINTS = 6;

// A,X  = ROCK
// B,Y  = PAPER
// C,Z  = SCISSORS

const scores = {
  AX: DRAW_POINTS,
  AY: WIN_POINTS,
  AZ: LOSE_POINTS,

  BX: LOSE_POINTS,
  BY: DRAW_POINTS,
  BZ: WIN_POINTS,

  CX: WIN_POINTS,
  CY: LOSE_POINTS,
  CZ: DRAW_POINTS,

  X: 1,
  Y: 2,
  Z: 3,
};

let points = 0;

fileLines.forEach((line) => {
  const [opponentMove, myMove] = line.split(" ");

  const roundPoints = scores[`${opponentMove}${myMove}`] + scores[myMove];

  points += roundPoints;
});

console.log(points);
