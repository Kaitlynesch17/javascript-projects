// Code your orbitCircumference function here:
function orbitCircumference(rad){
let circumference = 2 * Math.PI * rad;

return Math.round(circumference);
};


// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
   let distance = numOrbits * orbitCircumference(orbitRadius);
   let time = Math.round(distance / orbitalSpeed * 100) / 100;

   console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
    
   return time;
};


// Copy/paste your selectRandomEntry function here:
function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:
function oxygenExpended(object) {
  let time = missionDuration(3);
  let oxygen = Math.round(object.o2Used(time) * 1000) / 1000;


    return `${object.name} will perform the spacewalk, which will last ${time} hours and require ${oxygen} kg of oxygen.`;
}


// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 let oxygenUsed = oxygenExpended(randomSelection(crew));


 console.log(oxygenUsed);