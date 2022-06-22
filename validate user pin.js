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
  const userInput = parseInt(readLine());
  const correctPin = 9372;
  const pinValidation = () => {
      return new Promise((resolve,reject) => {
          setTimeout(() => {
              if (userInput === correctPin){
                  resolve("Success");
              }else{
                  reject("Please enter valid pin");
              }
          }, 1000);
      });
  };
  pinValidation().then((resolve) => {
      console.log(resolve);
  }).catch((reject) => {
      console.log(reject);
      });
  /* Write your code here */
}
