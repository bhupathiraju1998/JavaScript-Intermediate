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
  let inputString = readLine();
  const subString = readLine();
  let newArray = []
  
  
  for(let each of inputString){
      newArray.push(each)
  }
  
  function stringSlicing(inputString,subString){
      if(inputString.includes(subString)){
          let obtainedIndex =  newArray.indexOf(subString[0])
          
          let slicedString =  newArray.slice(obtainedIndex)
          console.log(slicedString)
          return slicedString.join("")
      }else{
          return inputString
      }
  }
  let result = stringSlicing(inputString,subString)
  console.log(result)
  /* Write your code here */
}
