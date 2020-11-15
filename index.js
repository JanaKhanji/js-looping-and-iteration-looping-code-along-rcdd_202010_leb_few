// Code your solutions in this file
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(array[], eventS){
  for( let i=0; i< array.length; i++){
    console.log(`Thank you, ${array[i]}, for the wonderful ${eventS} gift!",`);
  }
}