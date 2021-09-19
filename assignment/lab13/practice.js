// function sayHi(){
//     console.log("Hi");
//     sayHi.counter++;  // to count how many times we run the function
//                      // sayHi.counter is a property
//     //sayHi.name                 
// }
// sayHi.counter=0;  // initial value
// sayHi.myParam= 9; 
// sayHi();     // Hi
// sayHi();     // Hi
// console.log(`Called ${sayHi.counter} times`,sayHi.myParam);

// console.log(sayHi.length);    // 0 , this will display the number of arguments passed in the function
// console.log(sayHi.name)     // sayHi will be displayed after using .name to print the name of function


////////timer///
// let timerId = setTimeout(() => console.log("never happens"), 1000); 
// console.log(timerId); // timer identifier
// clearTimeout(timerId);
// console.log(timerId); // same identifier (doesn't become null after canceling)
/////////
// let count =1;
// function interval(){
//     console.log("I am here ", count);
//     count++;
//     if(count>5)
//        clearInterval(this)
// }
// setInterval(interval,1000);   // this will print count till the if condition is not satisfied
//                              // and when it does it will stop

/**
 * setTimeout allows to run a function once after the interval of time
 * Func: Function or a string of code to execute.
 * Delay: delay before run, in milliseconds(1000 ms =1 second),by default 0.
 * arg1, arg2... : Arguments for the function
 */
//let timerId = setTimeout(func, [delay], [arg1], [arg2]);
// function sayHi() { 
//     console.log('Hello');

// }
// setTimeout(sayHi, 1000);     // print the console.log('Hello') after 1000ms
//                             // we cannot use sayHi() since its not returning function 
                            // and passing sayHi() will be error in this case  
// function sayHi() { 
//     console.log('Hello');
//     return function(){
//         console.log("value")
//     }
// }
// setTimeout(sayHi(), 1000);  // here we can use sayHi() because we have a return function
//                            // will print inside sayHi rightaway and 
//                            // will wait time to run the return function,"value" in this case

//With arguments:
// function sayHi(phrase, who) {
// console.log( phrase + ', ' + who );
//  }
// setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John  prints after 1000 ms

/**
 * schedule the function and then cancel it
 * let timerId = setTimeout(...) 
 *  clearTimeout(timerId)
 */
//  timerId = setTimeout(() => console.log("never happens"), 1000); 
// console.log(timerId); // timer identifier
//clearTimeout(timerId);
//console.log(timerId); // same identifier (doesn't become null after canceling)

// using arrow function 
//setTimeout((phrase,name)=>console.log(phrase+","+ name),1000,"Hi","John")

/**
 * setInterval has same syntax as setTimeout 
 * let timerId = setInterval(func, [delay], [arg1], [arg2], ...)
 * Repeatedly calls the function after the given interval of time.
*/
// let timerId = setInterval(() => console.log('tick'), 2000);
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
// let stop = setInterval(() => console.log('tick'), 2000);
// clearInterval(stop);


let stop=setTimeout(() => console.log("Hello"),0);
console.log("World");     // prints 1st World then Hello
//clearTimeout(stop)

/* Write a function printNumbers(from, to) that outputs a number every second, 
starting from from and ending with to.
Make two variants of the solution.
1,Using setInterval.
2,Using nested setTimeout.*/

// function printNumbers(from, to) {
//     let current = from;
  
//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }
  
//   // usage:
//   printNumbers(5, 10);

//   function printNumbers2(from, to) {
//     let current = from;
  
//     setTimeout(function go() {
//       console.log(current);
//       if (current < to) {
//         setTimeout(go, 1000);
//       }
//       current++;
//     }, 5000);
//   }
  
//   // usage:
//   printNumbers2(5, 10);
  /**
   * Note that in both solutions, there is an initial delay before the first output.
   *  The function is called after 1000ms the first time.
   */
//    function printNumbers3(from, to) {
//     let current = from;
  
//     function go() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }
  
//     go();
//     let timerId = setInterval(go, 1000);
//   }
  
//   printNumbers3(5, 10);

////Any setTimeout will run only after the current code has finished.//

let i = 0;
setTimeout(() => console.log(i), 0); // ? 

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
} ////

////////class labs////

function a(){
    console.log("print me");
    let count=0;
    return function(){
        console.log("I am inner ",++count)
        if(count>=6)
        {clearInterval(stop1)}

    }
}
function sayHi(phrase,who){
    console.log(phrase +','+who);

}
setTimeout(sayHi,1000,"hello",'aradom');
let stop3=setTimeout(sayHi,2000,"hello",'sophia');
let stop4=setTimeout(sayHi,1000,"hello",'titi');
let stop1=setInterval(a(),1000);
clearTimeout(stop4)
/**
 * hello,aradom
  and I am inner  1 get printed at the same time

  hello,sophia
I am inner  2
they also get printed at the same  time after the first set
 */
