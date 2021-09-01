let prompt= require('prompt-sync')();
let input= prompt("Enter any digit:  ");
    
let arr=[];
   arr= input.split('');
    console.log(arr);
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=parseInt(arr[i]);
}
console.log(sum);