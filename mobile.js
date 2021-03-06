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
let  removeCharging = () =>{
        console.log("Please remove charging");
    };

class Mobile {
    constructor(brand, ram, battery, isOnCall, song){
        this.brand = brand;
        this.ram = ram;
        this.battery = battery;
        this.isOnCall = isOnCall;
        this.song = song;
    }
    
    charging(){
        if(this.battery < 100){
            
            console.log(`Mobile charged 100%`);
        }else{
            
            console.log(`Mobile is fully charged`);
            removeCharging();
        }
    }
   
    playMusic(){
        console.log(`Playing ${this.song} song`);
    }
    stopMusic(){
        console.log("Music stopped");
    }
    
    makeCall(){
        this.isOnCall = true;
        console.log("Calling...");
    }
    endCall(){
        if(this.isOnCall === false){
            console.log("No ongoing call to end");
            
        }else{
            
            console.log("Call Ended");
            this.isOnCall = false;
        }
    }
 
  /*
   * Write your code here
   */

}

/* Please do not modify anything below this line */

function main() {
  const brand = readLine();
  const ram = readLine();
  const battery = parseInt(readLine());
  const song = readLine();
  const isOnCall = JSON.parse(readLine());
  
  const myMobile = new Mobile(brand, ram, battery, isOnCall, song);
  
  console.log(`Mobile charged ${myMobile.battery}%`);   //  The Mobile battery charged percentage
  myMobile.charging();  // The Mobile charging
  
  myMobile.playMusic(); // The Mobile will start playing a song
  myMobile.stopMusic(); // The Mobile will stop playing a song
  
  myMobile.endCall(); // The Mobile will end a call.
  myMobile.makeCall(); // The Mobile will make a call.
  myMobile.endCall(); // The Mobile will end a call.
}