"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
    module.exports = { ucFirst,checkSpam, truncate,extractCurrencyValue,camelize,getMaxSubSum} ////add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
    let newStr1= str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase();
     
     return newStr1;
}

  function checkSpam(str) {
        let lowerStr= str.toLowerCase();
      if(lowerStr.includes("viagra") || lowerStr.includes("xxxxx")){
          return true;
      }return false;
  }

  function truncate(str, maxlength) {
       
      return (str.length>maxlength)? str.slice(0,maxlength-1)+"…":str
       
  }
 

 function extractCurrencyValue(str) {
    return +str.slice(1);
  }
//console.log(extractCurrencyValue("the number $120 is the amount"))
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */

    function getMaxSubSum(arr) {
        if(arr.length==0) return 0
        let listSums = [];
        for(let i = 0 ; i < arr.length; i++){
        let sum = 0;
        for(let j = i ; j < arr.length ; j++){
        sum += arr[j]
        listSums.push(sum);
        }
        }
       if(Math.max(...listSums)<0) return 0;
       return(Math.max(...listSums));
        }





function camelize(str) {
    let arr=str.split('-');
    let finalstring=''
    finalstring =arr.reduce((finalstring,current,index)=>{
         if(index==0)
             return finalstring+current;
          return finalstring+ucFirst(current);
    },'')
 return finalstring;
  }
