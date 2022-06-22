"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let fare = JSON.parse(readLine());
  let discountPercentage = JSON.parse(readLine());
  let percentage = (fare,discountPercentage) => {
      let finalPercentage = (fare*discountPercentage) / 100;
      let percentageResult = fare - finalPercentage
      return percentageResult;
  }
  /* Please do not modify anything above this line */
    let result = percentage(fare,discountPercentage);
    console.log(result);
  /*
   * Write the arrow function here and log the output.
   */
}
