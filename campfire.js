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
  const isSticksFound = JSON.parse(readLine());
  const isLighterFound = JSON.parse(readLine());
  let gatheringSticks = () => {
      return new Promise((resolve,reject) => {
          if(isSticksFound){
              resolve("Sticks Gathered");
          }else{
              reject("Sticks Not Found");
          }
      });
  };
  let arrangingSticks = () => {
      return new Promise((resolve,reject) => {
          resolve("Sticks Arranged");
          
      });
  };
  let campFire = () => {
      return new Promise((resolve,reject) => {
          if(isLighterFound){
              resolve("Campfire Lighted");
          }else{
              reject("Lighter Not Found");
          }
      });
  };
  const myPromise = async () =>{
      try{ 
      let gathering = await gatheringSticks();
      console.log(gathering);
      let arranging = await arrangingSticks();
      console.log(arranging);
      let lighting = await campFire();
      console.log(lighting);
      }
      catch(error){
          console.log(error);
      }
  }
  myPromise()
  /* Write your code here */
}

