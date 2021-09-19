// //1
let grapes = "green";
function fruits(){
    return function(message){
        return grapes;
    }
}
console.log(fruits()("hello"))             // green
// //2
let x = 10;
function globalVar(){
    return function(){
       return x;
    }
}
let fn = globalVar();
console.log(fn ());                      // 10
x = 20;


// //3
function sport(message){
    console.log(message);       // Hello
    message = "Hi";           //message = "Hi" b= 10;
    let b = 10;
    console.log(message,b);
    return function(message){ 
        let b;                   //-> message = undefined b ->undefined
        console.log(b);
        return message;
    }
   
}
let sportFn = sport("Hello");
console.log(sportFn ());
// parameters, variables in that function scope -

// //4
function test(x){
    console.log(x);                    // 2
    x = 10;
    y = x++;
    console.log(y,x);                 //  10 ,  11
    return function(){
        return x++;
    }
}
console.log(test(2)());                //  11

// //5
function makeAdder(x){
    return function add(y){
        console.log("Inside add ",y)
        return x+y;
    }
}

let adder1 = makeAdder(2);
console.log(adder1(10));                          //_12___________
console.log(adder1(14));                           //_______16_______

let adder2 = makeAdder(5);
console.log(adder2(10));                          //____15__________
console.log(adder2(14));                          //____19__________

// //6
function callMe(){
    console.log("callMe")
    function inner(){
        console.log("Inside")
    }
    inner();
}
callMe();//______________   no return value

//7
// function outer(){
//     console.log("outer")
//     function innerCall(){
//         console.log("innerCall")
//     }
//     innerCall();
//     let j = 10;
// }
// outer().innerCall();//______________  error 

// //8
function car(){
    let color = "white";
   // console.log(arguments.length)
    function seat(){
        let color = "brown";
    }
    console.log(color)
}
car("black");

// //9
function department(){
    let numberOfDepartments = 5;
    function software(){
        let language = "javascript";
    }
    console.log(language)   // undefined
}
department();

// //10
function department(language){
    let numberOfDepartments = 5;
    function software(){
        let language = "javascript";
        console.log(language)           // javascript
        console.log(numberOfDepartments)
    }
    software();
    console.log(language)           // java
}
department("java");                 

