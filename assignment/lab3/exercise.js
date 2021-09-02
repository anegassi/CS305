function salesman(input,cost){
    let status= input.toLowerCase();
    let result;
    if (status === "salaried"){
        if(cost>=0 && cost <500){
            result="no commission";
        } else if (cost>= 500 && cost <1000){
            result= 200+(0.1*(cost-500));
        }
    } else {
        if(cost>=0 && cost<500){
            result= "no commisson at all";
        } else if (cost>=500 &&  cost<1000){
            result= 1000;
        } else if(cost>=1000){
            result=0.3*(cost)
        }
    } 
    return result;
}
console.log(salesman("salaried",500));
console.log(salesman("notSalaried",100));
console.log(salesman("salaried",200));
console.log(salesman("notSalaried",1000));

let prompt= require('prompt-sync')();
let age=0;

do{
    age=parseInt(prompt("Enter your age:  "));
} while(age<18)
 age=prompt("enter your age: ");
while(age<18){
    age=parseInt(prompt("reenter your age:"));
}