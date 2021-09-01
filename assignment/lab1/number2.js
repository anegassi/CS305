let prompt= require('prompt-sync')();
let age=0;
 

while(age<18){
     age= prompt("Enter your age: ");
} 
 
do {
    age=prompt("Enter your age: ");
    
} while(age<18)