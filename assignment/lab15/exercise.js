////call by context
function context(){
    console.log(this);    // will print global since we have not calling it from an object
}

obj={ a:1};
obj.context= context;   // we added the context function as a property of obj

context();  // this will print undefined global object since we are not calling 
            // specifically from an object

obj1={ a:"Hello"} 
obj1.context= context;

setTimeout(context,1000);   // will print the function Timeout

////////////////////////////
function area(){
    console.log(this);              // Global 
    console.log(this.side)          //  undefined
    return this.side * this.side; 
    }
    const square1 = {side: 5, area: area};
    console.log(area());                  // NaN
    
    /////////////////////
    function area(){
        console.log(this);                //   { side: 5, area: [Function: area] }
        return this.side * this.side;
        }
     const    square2 = {side: 5, area: area};
        console.log(square2.area());            // 25

        /////////////  Quiz
/**
 * what does the console show in strict mode
 */
 "use strict";
function printHello(){
    console.log(this);
    function innerHello(){
        console.log(this);
    }
    innerHello();
}
printHello();

//  undefined
// undefined
/**
 * what does the console show in non strict mode
 * the above function
 */
// global in both cases

/**
 * what does the console show in strict mode and non in strict mode
 */
 //"use strict";
 //console.log(this)     //  {}

 // non strict mode
//console.log(this)       //  {}

/**
 * 
 */
 "use strict";
// let a={1:this}
// console.log(this)      //  {}
// console.log(a)         //   { '1':{}}
/**
 * 
 */
function printMe(){
    console.log(this);                //  global
    console.log(this.setTimeout);   // function setTimeout
}
printMe();
/**
 * run with strict mode
 */
function returnObject(){
    function inner(){
        console.log(this);               //  undefined since its on strict mode
    }
    inner();
    return {innerFn: inner};
}
returnObject().innerFn();          //{ innerFn: [Function: inner] }
                                   // since we are calling from an object
// /**
//  * 
//  */
// let myObject={ a:1, b:2, print:()=> { 
//     console.log(this);                // { }
//     return "I am an arrow function";
// }}
// console.log(myObject.print())    // "I am an arrow function"
// /**
//  * 
//  */
let gameOfChance={
    dice:2,
    spinningTops:false,
    playerOne: function(){
        let gameOfSkill={
            playerTwo:function(){
                console.log(this);            // object gameOfSkill
            }
        }
        gameOfSkill.playerTwo();
    }
}
gameOfChance.playerOne();
// /**
//  * 
//  */
function kathak(){
    let jaipur={
        origin: true,
        expression: function(){
            console.log(this);              // udefined
        }
        
    }
    let innerFn= jaipur.expression;
    innerFn();
}
 kathak();
// /**
//  * 
//  */
function river(){
    function ribbon(){
        console.log(this);    // object { ribbon: [Function: ribbon] }
    }
    return { ribbon: ribbon};
}
function flow(){
    river().ribbon();
}
flow();
// /**
//  * 
//  */
let sea= {
    deposit:"sodium chloride",
    tides: function(){
        console.log(this.deposit);           // sodium chloride
        let moonCycles=()=> this.deposit="magnesium";
        moonCycles();
        console.log(this.deposit);        //  magnesium
    }
}
sea.tides();