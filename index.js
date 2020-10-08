function dwarfRollCall(dwarfNames) {
  var names = '';
  for (var i = dwarfNames.length/2; i < dwarfNames.length; i++) {
   names =`${names}${i+1}. ${dwarfNames[i]} `
  }
  return names;
}


function summonCaptainPlanet(planeteerCalls) {
  var calls = [];
  for(var i=0; i < planeteerCalls.length; i++) {
    calls.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return calls;
}


function longPlaneteerCalls(calls) {
  var elements = false;
  for (var i = 0; i < calls.length; i++) {
   if (calls[i].length > 4) {
    elements = true;
   }
  }
  return elements;
}


function findTheCheese(food) {
  var snacks = "no cheese!";
  for (var i=0; i < food.length; i++) {
    var item = food[i]
    if (item === "cheddar"){
      return item;
    }
    if (item === "gouda"){
      return item;
    }
    if (item === "camembert"){
      return item;
    }
  }
  return snacks;
}

function wordsWithB(words){
  var response = [];
  for (var i=0; i < words.length; i++) {
    var names = words[i]
    if(name[0] === 'B') {
      response.push(names)
    }
    }
    return response;
}