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
  const stringsArray = JSON.parse(readLine().replace(/'/g, '"'));
  const startString = readLine();
  const endString = readLine();
  let newArray = [];
  function result(each){
      if(each.startsWith(startString) || each.endsWith(endString)){
          newArray.push(each);
      }
  }
  let checkingstatus = stringsArray.filter((each)=>result(each));
  console.log(newArray);
  /* Write your code here */
}
