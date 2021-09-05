"use strict";

const { assert } = require("console");

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap,myMap1,myMap2,triple}; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(n){
    let num=n*2 
    return num;
}
/**
 *@returns {number} double the input
 */
 function triple(n){
    let num=n*3 
    return num;
}



/**
 * @returns {number} 100 times the input
 */
 function times100(n){
     let num=n*100;
     return num;
 }


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr,func){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
         newArray[newArray.length]=func(arr[i]);
         
    }
    return newArray;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
 let myMap1=function (arr,func){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
         newArray[newArray.length]=func(arr[i]);
         
    }
    return newArray;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
 let myMap2=(arr,func)=>{
    let newArray=[];
    for(let i=0;i<arr.length;i++){
         newArray[newArray.length]=func(arr[i]);
         
    }
    return newArray;
}

