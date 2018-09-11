function forLoop() { 
  for (var i = 0; i < 25; i++) {
    if(i === 1){
      console.log("I am " + i + " strange loop.")
    } else {
      console.log (`I am ${i} strange loops.`);
    }
} 

function forLoop() { 
  for (var i = 0; i < 25; i++) {
   console.log(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
}