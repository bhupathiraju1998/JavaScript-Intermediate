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

function ArithmeticOperations(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;
  this.ratioOfNumbers = function(){
      let ratio = firstNumber / secondNumber;
      return ratio;
  };
  this.sumOfCubesOfNumbers = function(){
      let sum = (firstNumber*firstNumber*firstNumber) + (secondNumber*secondNumber*secondNumber);
      return sum;
  };
  this.productOfSquaresOfNumbers = function(){
      let product =( firstNumber*firstNumber ) * (secondNumber*secondNumber);
      return product;
  };
}

function main() {
  const firstNumber = JSON.parse(readLine());
  const secondNumber = JSON.parse(readLine());
  
  const operation1 = new ArithmeticOperations(firstNumber, secondNumber);

  /* Write your code here */

  console.log(operation1.ratioOfNumbers());
  console.log(operation1.sumOfCubesOfNumbers());
  console.log(operation1.productOfSquaresOfNumbers());
}