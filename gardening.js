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
  const isGrassTrimmerFound = JSON.parse(readLine());
  const isWaterHosePipeFound = JSON.parse(readLine());
  
  /* Write your code here */
  let watering = (isWaterHosePipeFound) =>{
    return new Promise((resolve,reject)=>{
        if(isWaterHosePipeFound === true){
            resolve("Watered Plants");
            
        }else{
            reject("Water Hose Pipe Not Found");
        }
    });
};
  let cleaning = ()=>{
      return new Promise((resolve,reject)=>{
          resolve("Garden Cleaned");
      });
  };
  let gardening = (isGrassTrimmerFound) =>{
    return new Promise((resolve,reject)=>{
        if(isGrassTrimmerFound === true){
            resolve("Grass Trimmed");
            
        }else{
            reject("Grass Trimmer Not Found");
        }
    });
};
  const myPromise = async () => {
    try {
        let gardeningMsg  = await gardening(isGrassTrimmerFound)
        console.log(gardeningMsg);
        let cleaningMsg = await cleaning();
        console.log(cleaningMsg);
        let wateringMsg = await watering(isWaterHosePipeFound);
        console.log(wateringMsg);
      /* Write your code here */
      
    } catch(error) {
        console.log(error);
        
      /* Write your code here */
      
    }
  };
  
  myPromise();
}
