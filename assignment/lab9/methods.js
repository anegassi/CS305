"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
  module.exports = {filterRange,filterRangeInPlace} //groupById, unique, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
  let newArray=[];
  for(let num of arr){
    if(num>=a && num<=b)
        newArray[newArray.length]= num;
  }
     return newArray;
  }

 
  function filterRangeInPlace(arr, a, b) {
      let temp=[];
      for(let i=0; i<arr.length;i++){
          if(arr[i]>=a && arr[i]<=b)
            temp[temp.length]=arr[i];
        
      }
       return arr=temp;
  }
 

  function Calculator() {
  }

  function unique(arr) {
  }


  function groupById(array) {
  }