let x=4;
let y=5;
console.log(`4+5=${x+y}`) // 4+5=9
console.log(x+y)    // 9
console.log("x+y"+x+y) // x+y45 

let arr=["a","b","c","d"]
arr.forEach(function(char,index){console.log(`${char} is at index ${index} in arr `)})

let arr1=["Bilbo", "Gandalf", "Nazgul"]
arr1.forEach(function(character){console.log(character)} );
        
arr1.forEach((item, index, array) => { console.log (`${item} is at index ${index} in ${array}`);
}); // using bacticks we can print the details of the array with information of its index and array name 
console.log()
arr1.forEach((item, index, array) => { console.log ("${item} is at index ${index} in ${array}");
});
arr1.forEach((item, index, array) => { console.log (item + " is at index " +index+ " in "+ array);
});
//////////////////////
/**
 * use forEach to log all the even elements of an array to the console
   [1,5,16,3, 108]
 */
let newAray=[1,5,16,3, 108];
 
 console.log()
newAray.forEach(function(number){
      if(number%2==0){
      console.log(number);
      }                               // 16,108
})
newAray.forEach(number=>{
    if(number%2==0){
    console.log(number);
    }                               // 16,108
})
//////////////**************/////////////////
let array1= [1, 0, false];

console.log(array1.indexOf(0) ); // 1 


console.log(array1.includes(1) ); // true
console.log(array1.indexOf(null) ); // -1   if not found returns -1
console.log(array1.indexOf(false)); //  2                          
// true ➢ uses === comparison.
// So, if we look for "false", it finds exactly false and not the zero.
console.log(array1.indexOf(0)); // 1

////////**************////////////
/**
 * "filter" Apply function to each item in array and 
 * return new array of all that pass the filter
 * let results = arr.filter(function(item, index, array) {
 * if true item is pushed to results and the iteration continues 
 * returns empty array if nothing found});
 */

 let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"}, 
    {id: 3, name: "Mary"}
    ];
    // returns array of the first two users
    let someUsers = users.filter(item => item.id < 3);
    console.log(someUsers.length); // 2
    console.log(someUsers); // [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]
    /*
     * find first element that satisfies a specific condition
     * arr.find(function(item, index, array)
     * if true is returned by passed function, item is returned and iteration is stopped
     * for falsy scenario returns undefined
     *
     */
    //Let’s find the one with id === 1 
    let user1 = [
          {id: 1, name: "John"}, {id: 2, name: "Pete"}, {id: 3, name: "Mary"}
          ];
          
    let user2= user1.find(item => item.id ===1);
       console.log(user2.name); // John

     //  arr.findIndex same but returns index where element is found instead of element and -1 when nothing found.
     let user3= user1.findIndex(index=> index.id==2)
     console.log(user3)  // 1   returns the index not the element

     //////*************/////////////
     const numbers = [1, 5, 18, 2, 77, 108];
    // use filter, find, and findIndex to find
    // all the even numbers
    // the first even number
    // the index of the first even number

    let evennumbers= numbers.filter(even => even%2===0)
  console.log(evennumbers)    // [ 18, 2, 108 ]
   let firstEven= numbers.find(even=> even%2==0)
   console.log(firstEven)    // 18
   let indexofFirtsEven= numbers.findIndex(even=> even%2==0)
   console.log(indexofFirtsEven)   //2

   //////////************////////////////////
   let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length); 
   console.log(lengths); // 5,7,6
   let arrr=["Bilbo", "Gandalf", "Nazgul"].map((item,index)=> {return {bb:index,vv:item.length}});
   console.log(arrr);
   /////////////////////////
   function compareNumeric(a, b) { 
     if (a > b) return 1;
     if (a == b) return 0;
     if (a < b) return -1;
    }
    let arr7 = [ 1, 15, 2 ]; 
    arr7.sort(compareNumeric);
     console.log(arr7);           // [ 1, 2, 15 ]

     ///////////////////////////////
     /**
      * for of’ vs ‘for in’ –ES6
      * Both for..of and for..in statements iterate over arrays;
      * for..in returns keys and works on objects as well as arrays
      * for..of returns values of arrays but does not work with object properties
     */
     let letters = ['x', 'y', 'z'];
     for (let i in letters) { console.log(i); } // "0", "1", "2",
                                                // for..in array prints the index numbers only
     for (let i of letters) { console.log(i); } // “x", “y", “z"
                                                // for..of in array prints the values of each index