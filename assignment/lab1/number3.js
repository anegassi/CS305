let prompt= require('prompt-sync')();
let initial= parseFloat(prompt("Enter initial amount:  "));
let rate= parseFloat(prompt("Enter annual interest rate:  "));
let years= parseFloat(prompt("Enter the number years:  "));
let n=12   // the number of interest time per year
 function balanceSavings(){
     let r= rate/100
     amount= initial*((1+(r/n))**(n*years));
     return amount;
 }
 console.log(balanceSavings());