let arr=[1,2,3,4,5]
console.log(arr.slice(2,2))
console.log(arr.slice(2,4))
console.log(+"5678" === Number("5678"))
console.log(arr.splice(3,5))
console.log(arr.splice(2,1))
console.log(arr.splice(0,2))
console.log(arr.splice(1,3))  //????

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players=[player1,player2,player3];
function sumPoints(){
    let sum=[]
    for(let i=0; i<players.length;i++){
           sum1=0;
        for(let j=0;j<players[i].points.length;j++){
            sum1+=players[i].points[j];
        }
          sum[sum.length]=sum1;
    }
    return sum;
}

 console.log("expect 10: ", sumPoints(players));


// write a function findProps to return an array of all 
// the properties in any given object */
let D={
a:1,
b:2,
c:3
}

function findProps(){
    let xx=[];
  for(let props in D){
      //xx[xx.length]= props;
      xx.push(props)
  }
  return xx;
}
 console.log("expect [a, b, c]: ", findProps({ a: 1, b: 2, c: 3 }));
 
 let b=0;
 function bar(n){
     let a=5;
     if(n>=0){
         n=Math.sqrt(n)
        }
        b=a+n;
        console.log(a,b,n);
    }
    console.log(b);
    bar(4);
    console.log(b);
   // console.log(n);   // error n is undefined

   for(let i=4;i>0;i=i-2){
       for(let j=1;j<=5;j=j+3){
           console.log(i+j);
        }
    }

    for(let i=0;i<=5;i++){
        let count=0;
        count++;
    }
    //console.log(count);  // error count is not defined

    arr=["What","How","Where"]
    let newArray= arr.filter(s=>s.startsWith("Wh"));

console.log(newArray)
arr1=[1,2,3]
let arr2= arr1.map(n=>Math.pow(n,3));
console.log(arr2)

//Write a function named isOddComposite that takes a number as input and 
//returns true if the number is both odd and a composite numberotherwise returns false.
//[5]e.g. isOddComposite(9)should return true isOddComposite(12)should return false
//isOddComposite(13)should return false

function isOddComposite(n){
    let isComposCount=0
    for(let i=2;i<n;i++){
        if(n%i ==0){
            isComposCount++;
        }
    }
    if(n%2!==0 && isComposCount!==0){
        return true;
    } else {
        return false;
    }
}
console.log(isOddComposite(9));  // true
console.log(isOddComposite(12));   // false
console.log(isOddComposite(13));    // false
console.log(isOddComposite(3));  // false
console.log(isOddComposite(21));   // true
console.log(isOddComposite(8));    // false

//Write a function that takes an array of numbers as input 
//and returns the second smallest value.
function secondsmall(arr){
    let small=arr[0];
    let newArray=[];
    let smallsec;
    for(let i=0; i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i];
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== small){
            newArray.push(arr[i]);
        }
    }
     smallsec=newArray[0];
    for(let i=0;i<newArray.length;i++){
       
        if( newArray[i]< smallsec){
            smallsec =newArray[i];
        }
    } 

    return smallsec;
}
console.log(secondsmall([1,2,3,4]));
console.log(secondsmall([2,4,3,5]));
console.log(secondsmall([8,5,3,7,2,4]));

//////////////////////
//Write a function compareValues that takes three parameters, 
//an array and two array indices. 
//Function returns 0 if the values at bothindices are equal, 
//returns -1 if the value at first index is smaller and 
//returns 1 if the value at the first index is bigger.
// assuming [1,3,2,4,5,0,2]is assigned to a variable arrFunction 
//callResultcompareValues(arr, 2, 6)0 ,compareValues(arr, 1, 5)1,compareValues(arr, 3, 4)-1
 
function compareValues(arr,a,b){
    if(arr[a]=== arr[b]){
        return 0;
    } else if (arr[a]<arr[b]){
        return -1;
    } else if( arr[a]>arr[b]){
        return 1;
    }
}
console.log("expect 0",compareValues([1,3,2,4,5,0,2], 2,6));
console.log("expect 1",compareValues([1,3,2,4,5,0,2], 1,5));
console.log("expect -1",compareValues([1,3,2,4,5,0,2], 3,4));

///////////////////////////////
//Write a function named fillArray that takes twoparameters first an empty array
//and second a number representing the max value. 
//This function should fill the array with100 random values between 0 and
// the max parameter passed.calling  
//fillArray(myArray,5) should fill myArray with 100 random values between 0 and 5
function fillArray(arr,max){
    arr=[];
    for(let i=0 ;i<100;i++){
        arr.push(parseInt(Math.random()* max));
    }
    return arr;
} 
console.log(fillArray(arr,5))
///////////////////////
//Write a function that takes an array of strings as input and 
//returns average length of the strings in the array. If the array is empty return 0
 function average(arr){
     let leng=0;
     if(arr.length === 0){
         return 0;
     }

     for(let i=0;i<arr.length;i++){
          leng+= arr[i].length;
     }
     return leng/arr.length;
 }
 console.log(average(["hi","i am","what","help","acdexs"]))
 console.log(average([]))

 //////////////////////////////
 //Write a function named evenIndicesSum that takes an array of numbers as input
 // and returns the sum of all the array values at the evenindices
 function evenIndicesSum(arr){

    let sum=0;
     for(let i=0;i<arr.length;i+=2){
         sum+= arr[i];
     }
    
     return sum;
 }
console.log(evenIndicesSum([1,2,3]))

console.log(evenIndicesSum([1,2,3,4,5]))
console.log(evenIndicesSum([1,2,3,4,5,6]))
console.log(evenIndicesSum([2,3,4,5,6,7]))

//////////////////////////////
 //Write a function named evenIndicesSum that takes an array of numbers as input
 // and returns the sum of all the array values at the evenindices

function findLargest(a,b,c){
    let largest=a;
    if(b>a && b>c){
        largest=b
    }else if (c>a && c>b){
        largest=c
    }
    return largest;
}
console.log(findLargest(1,2,3))
console.log(findLargest(1,3,2))
console.log(findLargest(3,5,7))