"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  const counts = {};

  arr.forEach((type) => {
    counts[type] = (counts[type] || 0) + 1;
  });

  let maxCount = 0;
  let mostFrequentType = 0;

  for (const type in counts) {
    if (
      counts[type] > maxCount ||
      (counts[type] === maxCount && parseInt(type) < mostFrequentType)
    ) {
      maxCount = counts[type];
      mostFrequentType = parseInt(type);
    }
  }

  return mostFrequentType;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
