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
  const pin = parseInt(readLine());
  const pinFunction = () =>{
      return new Promise((resolve,reject) => {
      setTimeout(() => 
      {
          resolve(pin);
      }, 1000);
  });
  };
   
  
  pinFunction().then((resolve) => {
      console.log(resolve);
  });
  /* Write your code here */
}
