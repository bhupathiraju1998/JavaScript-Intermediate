"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0 ;

process.stdin.on("data" , (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end",(_) => {
    inputString = inputString.trim().split("\n").map((str) => str.trim());
    main();
});

function readLine(){
    return inputString[currentLine++];
}

function Travel(kit,item){
    this.kit = kit;
    this.item = item;
}

function main(){
    const travelBag = {
        ticket : "Hyderabad-vizag",
        clothes : ["Shirt","T-Shirt","Jeans"],
        medicines : "Paracetmol",
        waterBottle : true,
        snacks : true
    };
    
    const item = readLine();
    
    const travelKit = Object.getOwnPropertyNames(travelBag);
    const travel = new Travel(travelKit,item);
    
    Travel.prototype.isKitContainsItem = function(){
        return this.kit.includes(this.item);
    };
    
    console.log(travel.isKitContainsItem());
}






