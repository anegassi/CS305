//Write both iterative and recursive solutions to calculate factorial of an integer.
// factorial (0) = 1
//factorial (n) = n * factorial (n-1) [for n>0]

// iterative solution
function factorial(n){
    if (n==0) 
       return 1;
    let result =1;
    for(let i=1; i<=n; i++){
        result*=i;
    }
    return result
}


//////  recursive solution 
function factorial2(n){
    if( n==1) 
        return n;
    else if(n==0)
         return 1;
    else 
     return n*factorial2(n-1);
    
}
console.log(factorial(5));
console.log(factorial2(5));
//////////////  counting length of a word with out using length method
 function lengthOfWord(s){
     if(s=="")    // is our base case
        return 0;
        //console.log(s.substring())
        return 1+ lengthOfWord(s.substring(1));

 }
 console.log(lengthOfWord("hellow"));

 


 function findMin(arr){
     if(arr.length==1)
     return arr[0];
     let current= arr.shift()
     let previous=findMin(arr);
     return current<previous?current:previous;
     

 }
 console.log(findMin([5,7,6,3,8,9]))
//////////////////////
function findMax(arr){
    if(arr.length==1)
    return arr[0];
    let current= arr.shift()
    let previous=findMax(arr);
    return current>previous?current:previous;
    

}
console.log(findMax([5,7,6,3,8,9]))
//////////////
 function arraysumRecursion(arr){
     if(arr.length==0)
      return 0;
   return arr.shift()+arraysumRecursion(arr)
 }
 console.log(arraysumRecursion([5,7,6,3,8,9]))
 //////////////////
 function arraysumRecursion2(arr){
    if(arr.length==0)
     return 0;
  return arr.pop()+arraysumRecursion2(arr)
}
console.log(arraysumRecursion2([5,7,6,3,8,9]))
/////////////////
///// Fibonacci series ///
// eg 0,1,1,2,3,5,8,13,etc
 
function fibonacci(num){
    let num1=0;
    let num2=1;
    let nextTerm=0
    for( let i=0;i<num;i++){
        nextTerm= num1 + num2;
       console.log(nextTerm)
        num1=num2;
        num2=nextTerm;
      
    }
   return nextTerm 
}
console.log(fibonacci(6));

//// fibonacci using selfcall////////
function fibonacci2(num){
    
    if(num<2) return 1
    else
    return fibonacci2(num-2)+fibonacci2(num-1)

}
// function fibonacci3(n){
//     for (let i=1;i<=n;i++)
      
//     console.log(i+':',fibonacci2(i))
// }

// console.log(fibonacci3(6));

/////////// 
/**
  * Write a recursive function to count the instances of a letter in a string. 
  * Use recursion rather than split and filter.
  * Base case?
  * Reductive recursive call?
  */

function occurrenceloop(str,letter){
    let count = 0;
    for(let i=0; i<str.length;i++){
        count+= str.charAt(i)=== letter ? 1:0;
    }
    return count;
}
console.log(occurrenceloop("aradom","a"))
console.log(occurrenceloop("hi i am in san jose in california","i"))
////////////////////
function occurrence(str,letter){
    if(str.length== 0)
    return 0;
    let count= str.charAt(0)=== letter;

    return count + occurrence(str.slice(1),letter);

}
console.log(occurrence("aradom","a"))
console.log(occurrence("hi i am in san jose in california","i"))
/////////////////////////////
/**
 * write an expression to access the name and salary of the second employee in sales
 * same for the second employee in the sites subdepartment
 */
let company1 = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }], 
    development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
    internals: [{name: 'Jack', salary: 1300}] }
    };

   console.log(company1.sales[1].name)
   console.log(company1.sales[1].salary)

   console.log(company1.development.sites[1].name);
   console.log(company1.development.sites[1].salary);

   
 //////////////////////////////////////
 let company = { 
    sales: [{name: 'John', salary: 1000},
            {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, 
                {name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{name: 'Jack', salary: 1300}],
         myDept:{subDep:[{name: 'subDep', salary: 500}] }
    }
}

function totalSum(comp){
    let totalSum=0;
    for(let value in comp){
        let subDpt= comp[value];
        if(Array.isArray(subDpt)){
           totalSum= subDpt.reduce((sum,obj)=> {return sum+ obj.salary},0)
        } 
        else {
          
          for(let keys in subDpt){
              let keySubDpt= subDpt[keys];
             if(Array.isArray(keySubDpt)){
                 totalSum+= keySubDpt.reduce((sum,obj)=> {return sum+ obj.salary},0)
             }
             else{
                 for(let keyss in keySubDpt){
                     totalSum+= keySubDpt[keyss].reduce((sum,obj)=> { return sum+obj.salary},0)
                 }
             }
        } 
        }

    }
    return totalSum;
}
console.log(totalSum(company));

/////////////////// total sum using reccursion 
let company3 = { 
    sales: [{name: 'John', salary: 1000},
            {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, 
                {name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{name: 'Jack', salary: 1300}],
         myDept:{subDep:[{name: 'subDep', salary: 500}] }
    }
}

function totalSumRecc(comp){
    let totalSum=0;
    for(let key in comp){
        if(Array.isArray(comp[key])){
            totalSum+= comp[key].reduce((sum,obj)=> { return sum+obj.salary},0)
        }
        else{
           totalSum+= totalSumRecc(comp[key]);
        }
    }
    return totalSum;
}

console.log(totalSumRecc(company3))
/////////////////////////////

function allEmployeeNames(company) {
    let employees = [];
    if (!company)
        return employees;

    for (let key in company) {
        if (Array.isArray(company[key])) {
            employees = employees.concat(company[key].map(item => item.name));
        }
        else {
            employees = employees.concat(allEmployeeNames(company[key]));
        }
    }
    return employees;
}

/////////////linked list//////////////////
 let list = { value: 1 };
list.next = { value: 2 }; 
list.next.next = { value: 3 }; 
list.next.next.next = {value: 4};
list.next.next.next.next = {value: 5};

console.log(JSON.stringify(list))
/*list.next.next= null;/// this will disconnect the third and fourth object from the list
console.log(list)*/

////delete {value:3}
/**let newList= list.next.next   // we have to assign the .next to a newList before we delete it
list.next.next= null;   // before we delete a .next we need to assign it to a new list inorder not to lose it 
console.log(list)
console.log(newList)
*/

let newList= list.next.next
list.next.next= null;
console.log(JSON.stringify(list))
console.log(JSON.stringify(newList))

///combining list and newList
list.next.next=newList
console.log(JSON.stringify(list))
newList=null;
console.log(JSON.stringify(newList))
///////////// adding new item in the front of the list
list={value: "new item", next:list};
console.log(JSON.stringify(list))
console.log(list)
//////////
function linkedList(){
    let d={value:'E'}
    let c = {value:"C",next:d}
    let b ={value:"B",next:c}
    let a = {value: "A", next:b};
    console.log(a);
    a.next=a.next.next; ////delete b.next;
    console.log(a);
     
    b.next =null;
    a.next.next.next = b;///adding b to the end
    console.log(JSON.stringify(a));

    c.next.next = {value:"Z"};//// adding Z between b and d
    c.next.next.next=b;
    console.log(JSON.stringify(a));
}
linkedList()


/////overloading
function log() { console.log("No Arguments");
}
function log(x) {
console.log("1 Argument: " + x); }
function log(x, y) {
console.log("2 Arguments: " + x + ", " + y);
}
log(); 
log(5); 
log(6, 7);


/////////////// using arguments object
const sum= findSum(1,2,3,4);
function findSum(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total+= arguments[i];  // arguments refers to the length of the parameters 
    }
    return total;
}

console.log(findSum(sum));
console.log(sum)
/////////////////////

/*  write a function that can be called with any number of arguments and 
    returns the product of the even arguments
    do first using the arguments object 
    then using ...rest parameter
*/
 const number= evenProduct(1,2,3,4,5,);
 const number1= evenProduct1(1,2,3,4,5);
 
 function evenProduct(){
     let total=1;
     for(let i=0; i<arguments.length;i++){
          if(arguments[i]%2==0){
          total*= arguments[i];
          }
     }
     return total;
 }
  function evenProduct1(x,y,...more){
      let total1=x;
      
      for(let i=0; i<more.length;i++){
          if(more[i]%2== 0){
              total1+=more[i];
          }
      }
      return total1;
  }
  console.log(number);
  console.log(number1);
  //////////////////////////////////
  /**
   * using spread operator it clones the array or object
   */
//   let a=[1,2,3]
//   let b=a;
//   let c=[1,2,3];
//   let d=[...a];
//   console.log(a==b);   // true
//   console.log(a==c);   // false coz they are referring to different object
//   console.log(a==d);   // false coz they are referring to different object
//   b.splice(0,1);
//   console.log(a);     // [2,3]
//   let e=[...c];
//   console.log(c==e);   // false coz its a clone and they are not the same
  /////////////////////////////////
  let a, b, c, d, e; 
   a = [1,2,3];
   b = "dog";
   c = [42, "cat"];
// Using the concat method.
d = a.concat(b, c); // [1, 2, 3, “dog”, 42, “cat”]
// Using the spread operator.
e = [...a, b, ...c]; // [1, 2, 3, “dog”, 42, “cat”] copyOfA = [...a] //[1, 2, 3]
let str = "Hello";
console.log( [...str] ); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log( [...str].join("&") );      //  H&e&l&l&o
console.log(typeof [...str].join("&") );  // string

a.push([5,6]);   
a.concat([5,6]);
console.log(a);    // [ 1, 2, 3, [ 5, 6 ] ] 
a=a.concat([5,6]);
console.log(a)       // [ 1, 2, 3, [ 5, 6 ], 5, 6 ]

let spread1=[1,2,3]
let spread2=[5,6,7]
let spread="dog"
console.log([...spread1,...spread2,spread]);
console.log(spread1.concat(spread2,spread));
//////////////////////////////
let aa, bb, cc, dd, ee;
aa = {a:1, b:2, c:3, d: 44}
bb = { ...aa }
console.log(bb) // {a:1, b:2, c:3, d: 44}
bb.a = 100;
console.log(aa) // {a:1, b:2, c:3, d: 44} -- clone
console.log(bb)  // { a: 100, b: 2, c: 3, d: 44 }
////////////////////////////
