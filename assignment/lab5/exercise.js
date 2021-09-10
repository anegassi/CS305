function ask(question, yes, no) { 
    if (false) yes()
     else no();
}
function showOk() {
console.log( "You agreed." ); 
}
function showCancel() {
console.log( "You canceled the execution." );
}

ask("Do you agree?", showOk, showCancel);
////////////////////////////////
function ask2(question, yes, no) {
    if (true) yes()
    else no();
 }

    ask2( "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); })   //   

/////////////////////////////////
let isEven = (a) => {return a%2===0;}
console.log(isEven(4));         // true
let isOdd = (a) => a%2 !== 0;
 console.log(isOdd(7));   //   true
let sayHello = () => console.log('HI');
 sayHello();    //   HI
console.log(sayHello)    // [Function: sayHello]  returns the function itself
