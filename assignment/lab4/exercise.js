
///// exercises from the slide
function sumMultiDimentionalArray(myArray){
    let sum=0;
    for(let i= 0;i< myArray.length; i++){
    
        for(let k= 0;k< myArray[i].length; k++){
            sum+= myArray[i][k];
        }
    }
    return sum;
}

console.log(sumMultiDimentionalArray([[1,2,3],[4,5],[6,4,7]]));

///sum of matrix with for of/////
function sumMatrix(newArray){
    let sum=0;
    for(let value of newArray){
        for(let innerValue of value){
            sum+=innerValue
        }
    }
    return sum;
}
console.log(sumMatrix([[1,2,3],[4,5],[6,4,7]]));

/*** examine expression array for balanced or not****/
function checkbalance(arr){
    let stackarray=[];
    for(let element of arr){
        if(element=='[' || element=='(' || element=='{'){
           stackarray.push(element);
        }
        else{
             var closebracket=element;
             var openbracket=stackarray.pop();
             if(isMatch(openbracket,closebracket)){
                 continue;
             }
             else{
                 return 'its not balanced'
             }
        }
    }
}

function isMatch(openbracket,closebracket){
    if(openbracket=='[' && closebracket==']')
       return true;
    if(openbracket=='(' && closebracket==')')
       return true;
    if(openbracket=='{' && closebracket=='}')
       return true;
   return false;
}

console.log(checkbalance(['[','(','{','}',')',']']))
console.log(checkbalance(['[','(','{','}',']',')']))
console.log(checkbalance(['{','(','[','}',']',')']))

//////////Math.randdom /////////
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(getRandomInt(11));
  // expected output: 0, 1 ,2,3,4,5,6,7,8,9,10
  
  console.log(getRandomInt(3));
  // expected output: 0,1,2
  
  console.log(Math.random());
  // expected output: a number from 0 to <1


  /*Fill aray with random numbers and calculate average */

  console.log("fillArray");
  function fillArray(){
      let newArray=[];
      let sum;
      let averagenum;
      for(let i=0; i<10;i++){
          newArray[i]= Math.floor(Math.random() *11);
      }  

      function average(){
        averagenum=0;
        sum=0;
         for(let i=0; i<newArray.length;i++){
              sum+= newArray[i];
          }
             averagenum= sum/newArray.length;
        
        }
        average();

        return averagenum;
  } 

  
let result=fillArray();
   console.log(result);
   console.log(fillArray());