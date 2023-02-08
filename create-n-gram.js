//https://adventofcode.com/2022/day/4

const fs = require("fs");

const greekDictionary = require("./greek-dictionary.js");

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
  greekDictionary.map((s) => s.toUpperCase()).join(" "),
  3
);

fs.writeFile("greek-model.json", JSON.stringify(model), (error) => {
  if (error) {
    console.error(`Error writing to file: ${error}`);
  } else {
    console.log(`Data written to file`);
  }
});
