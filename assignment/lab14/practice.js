function makeArmy(){
    let shooters=[];
    let i=0;
    let count=0;
    while(i<10){
        //let count=0
        let shooter=function(){
            console.log(i,++count);
        }
        shooters.push(shooter);
        i++
    }
    return shooters;
}
let army=makeArmy();
army[0]()
army[2]()
army[0]()
army[9]()
/**
 * 
 */
// function createShooter(i){
//     return function(){
//         console.log(i);
//     }
// }
// function makeArmy(){
//     let shooters=[];
//     let i=0;
//     while(i<10){
//         shooters.push(createShooter(i));
//         i++;
//     }
//     return shooters;
// }
// let army=makeArmy();
// army[0]()
// army[0]()
// army[0]()
/**
 * 
 */
// function makeArmy(){
//     let shooters=[];
//     for(let i=0;i<10;i++){
//         let shooter= function (){
//             console.log(i);
//         }
//         shooters.push(shooter);
//     }
//     return shooters;
// }
// let army= makeArmy();
// army[0]();
// army[1]();
// army[2]();

/**
 * 
 */
function a(x){
    ++x;
    console.log(x);     // 11
}
let p=10;
console.log(a(p));    // undefined because the function is not returning anything
console.log(p);       // 10

function a(x){
    ++x;
    console.log(x)          // 16
}
 p=15;
console.log(a(p));        // undefined because function does not have return value
console.log(p);          //15
/**
 * 
 */
function arrayPass(param){
    param.push(2);
    console.log(param);             //   [ 1, 2, 3, 2 ]
}
let param = [1,2,3];
console.log(param);            //  [ 1, 2, 3 ]
arrayPass(param);
console.log(param);            //   [ 1, 2, 3, 2 ]

/**
 * creat object using object literal , update and delete object
 */
let obj={};      // creat object

obj.key1="value";   // add 
obj.key1= "value update";  // update
delete obj.key1;        //  delete 
/**
 * 
 */
function outer(){
    console.log(outer);           // [Function: outer]
    function innerCall(){
        console.log("innerCall");      // innerCall
    }
    innerCall();            // innerCall
    let j=10;
    let b= {
        inner: function(){
            return "inner inner";
        }    
    }
    console.log(b,innerCall());   // { inner: [Function: inner] }  ,undefined
    return b;
}
console.log(outer());     //  { inner: [Function: inner] }
///////////
let x=1;
 function input(){
    return function (x) {
        return x*2;    
    };
}
const output= input();
console.log(output);         // [Function (anonymous)]   
console.log(output());        // NaN
console.log(input(x));        //   [Function (anonymous)]
console.log(input()(x))       // 2
console.log(input(x)(x))       //  2