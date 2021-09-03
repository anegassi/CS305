"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree,sum, multiply ,findLongestWord,reverseArray,reverseArrayInPlace,scoreExams}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    let biggestNumber=a;
    if(b>a){
        biggestNumber=b;
    }
    if(biggestNumber<c){
        biggestNumber=c;
    }
    return biggestNumber;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} tot multiple of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for (const number of arr){
        tot *= number;
    }
    return tot;

}

/**
 * 
 * @param {String} String of words
 * @returns {number} number of the longestword
 */
function findLongestWord(arr){
    let longestword=arr[0];
    for (const number of arr){
        if(number.length> longestword.length){
            longestword=number;
        }
    }
    return longestword.length;

}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {Array} reversearray numbers
 */
 function reverseArray(arr){
    let reversearray=[]
    for(let i=arr.length-1; i>=0; i--){
        reversearray[reversearray.length]=arr[i];
    }
    return reversearray
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {Array} arr numbers
 */
 function reverseArrayInPlace(arr){
   
    for(let i=arr.length-1, j=0; i>=arr.length/2; i--, j++){
        let temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp
    }
   
    return arr
}
console.log(reverseArrayInPlace([1,2,3,4]))

/**
 * 
 * @param {Array} arr of numbers
 * @returns {Array} reversearray numbers
 */

function scoreExams(arr1, arr2){
    let count;
    let score=[];
    for(let student of arr1){
        count=0
        for(let i=0;i<student.length;i++){
            if(student[i]==arr2[i])
            count++
            
        }
        score[score.length]=count;
    }
  return score
}



