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
  const isResourceAvailable = JSON.parse(readLine());
  const planting = () => {
      return new Promise ((resolve,reject) =>{
          if (isResourceAvailable){
              resolve("Tree Planted");
          }else{
              reject("Resource not available");
          }
      });
  };
  const myPromsie = async () => {
      try{
          const plantStatus = await planting()
          console.log(plantStatus);
      }catch(error){
          console.log(error);
      }
  }
  /* Write your code here */
  myPromsie();
}
