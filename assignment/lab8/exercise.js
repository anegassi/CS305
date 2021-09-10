///////repeat the number till the input is num
let prompt= require('prompt-sync')();
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
    
    return +num;
  }
  console.log(readNumber());

  /// occasional infinite loop
  let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) 
  console.log(i);
}

/////random number from min to max
function random(min,max) {
    return min + Math.random() * (max-min);
  }
  
  console.log(random(1,5));
  console.log(random(1,5));
  console.log(random(1,5));

  ///////random integer from max and min
  function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1- min);
    return Math.floor(rand);
  }
  
  console.log(randomInteger(1,3));