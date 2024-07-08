// Code your crewMass function here:

function crewMass(crew){
  let totalMass = 0;
for (let i = 0; i < crew.length; i++) {
  totalMass = totalMass + crew[i].mass;
}
  return Math.round(totalMass * 100) / 10;
};

// Code your fuelRequired function here:
const rocketMass = 75000;

function fuelRequired(rocketMass, crew){
let mass = rocketMass + crewMass(crew);


let safety = 0; 

for (let i = 0; i < crew.length; i++){
  if (crew[i].species.toLowerCase() === "dog" || crew[i].species.toLowerCase() === "cat") {
    safety = safety + 200;
  } else {
    safety = safety + 100;
  }
}

let fuelNeeded = (mass * 9.5) + safety;

  return Math.ceil(fuelNeeded);
};

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 
 console.log(`The mission has a launch mass of ${crewMass(crew) + rocketMass} kg and requires ${fuelRequired(rocketMass, crew)} kg of fuel`);