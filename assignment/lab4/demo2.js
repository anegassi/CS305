/**
 * write a function that adds individual values in array with their corresponding index
 * in another array.
 */
let arr2=[1,2,3,4]
let arr1=[6,7,8,5,9,5]
function sum(arr1,arr2){
    let newArray=[];
    let len= arr1.length>arr2.length ? arr1.length : arr2.length;
    console.log(len)   // len helped us to choose an array with the longest length
                    // better to use if statement to choose the length of the longest array
    for(let i=0;i<len;i++){
        if(arr1[i]== undefined){     
            newArray.push(arr2[i]);
    } else if(arr2[i]== undefined){
            newArray.push(arr1[i]);
    } else{
        newArray.push(individualSum(arr1[i],arr2[i]));
    }
    
   }
  return newArray;
}

function individualSum(a,b){
    return a+b;
}
console.log(sum(arr1,arr2))