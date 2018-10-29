'use srtict'

const arr = [];
let userInput;
let sum=0;
do {
    userInput = prompt('enter number');
  if ( userInput === null){
    break;
  } else if (!isNaN(userInput)){
    arr.push(Number(userInput));
  } else {
    alert ('enter number');
} 
}
while (userInput !== null);

for ( let elements of arr ){
  sum += elements;
}
alert (`Total: ${sum}`);
