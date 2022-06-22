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
  const dayCharge = JSON.parse(readLine());
  const days = parseInt(readLine());
  let calculateBill =  (dayCharge,days) =>{
      let finalBillResult;
      let normalBill = dayCharge*days;
      if (days < 2){
        let finalBillResult = normalBill;
        return finalBillResult;
      }else if(days>5){
        let finalBillResult = normalBill-(normalBill*15)/100;
        return finalBillResult;
      }else{
        let finalBillResult = normalBill-(normalBill*5)/100;
        return finalBillResult;
      }
      

  };
  const finalBill = calculateBill(dayCharge,days);
  console.log(finalBill);
  /* Write your code here */
}