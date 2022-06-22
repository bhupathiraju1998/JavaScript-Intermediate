"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function createPassengerTicket(name, isTicketConfirmed) {
    return {
          name:name,
          isTicketConfirmed:isTicketConfirmed
      }
  /*
   * Write your code here and return output.
   */
}

/* Please do not modify anything below this line */

function main() {
  let firstPassengerName = readLine();
  let firstPassengerTicketStatus = JSON.parse(readLine());
  let secondPassengerName = readLine();
  let secondPassengerTicketStatus = JSON.parse(readLine());
 
  
  
  let result1 = createPassengerTicket(firstPassengerName,firstPassengerTicketStatus);
  let result2 = createPassengerTicket(secondPassengerName,secondPassengerTicketStatus);
  console.log(result1);
  console.log(result2)
 
  
  
  
  
/* Please do not modify anything above this line */ 
  
  /*
   * Write your code here and log the output.
   */
}
