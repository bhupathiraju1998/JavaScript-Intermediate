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

/* Please do not modify anything above this line */

function main() {
  const myArray = JSON.parse(readLine().replace(/'/g, '"'));
  const valuesOfOddlength = myArray.filter((each) => each.length % 2 === 1)
  const valueToUppercase = valuesOfOddlength.map((item) => item.toUpperCase());
  console.log(...valueToUppercase)
  /* Write your code here */
}
