//https://adventofcode.com/2022/day/4

const fs = require("fs");

const fileContent = fs.readFileSync("english-dictionary.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);

function buildNGramModel(corpus, N) {
  let ngrams = {};

  for (let i = 0; i < corpus.length - N + 1; i++) {
    let ngram = corpus.substr(i, N);

    if (!ngrams[ngram]) {
      ngrams[ngram] = 0;
    }

    ngrams[ngram]++;
  }

  return ngrams;
}

const model = buildNGramModel(
  fileLines.map((line) => line.toUpperCase()).join(" "),
  3
);

const totalScores = Object.keys(model).reduce((sum, key) => {
  const score = model[key];
  sum += score;

  return sum;
}, 0);
const cutOffMargin = totalScores * 0.0001;

console.log({ totalScores, cutOffMargin });

Object.keys(model).forEach((key) => {
  const score = model[key];
  if (score < 5) delete model[key];
});

console.log({ length: Object.keys(model).length });

fs.writeFile("english-model.json", JSON.stringify(model), (error) => {
  if (error) {
    console.error(`Error writing to file: ${error}`);
  } else {
    console.log(`Data written to file`);
  }
});
