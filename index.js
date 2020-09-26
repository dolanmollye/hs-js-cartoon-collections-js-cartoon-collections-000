function dwarfRollCall(dwarves) {
let dwarfNames = []
  for(let i = 0; i < dwarves.length; i++){
    
    dwarfNames.push(`${i+1}. ${dwarves[i]} `)
    
  }
  return dwarfNames.join("");  
}

let i = 0
function summonCaptainPlanet(planeteerCalls){
  let upperCasePlaneteers = []
  for (i=0; i<planeteerCalls.length; i++){
    let punctuation = "!"
    upperCasePlaneteers.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase())
  }
  return upperCasePlaneteers
}

function longPlaneteerCalls(words) {
  for (i=0; i<words.length; i++) {
    if (words[i].length>4)
    return true
  }
  return false
}

function findTheCheese (foods) {
let found = foods.find(i=> i=='cheddar')
if (found == 'cheddar'){
return found
}
  return "no cheese!"
}
