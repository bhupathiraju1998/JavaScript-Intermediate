"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const nestedArray = JSON.parse(readLine());
  function arraySum(element){
      let sum = element.reduce((a,b)=>a+b);
      return sum;
  }
  function evenElements(item){
      return item.some((num)=> num % 2 === 0);
  }
  const finalSum = nestedArray.map((each)=>evenElements(each) ? arraySum(each):0);
  /* Write your code here */
  console.log(finalSum);
}
