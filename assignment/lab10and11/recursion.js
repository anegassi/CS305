"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo,factorial, fibonacci, outputListLoop,outputList,reverseListLoop,reverseList }; //add all of your function names here that you need for the node mocha tests


 function sumTo(n){
     let result=n;
     if(n==0)
     return 0;
     result+= sumTo(n-1);
      return result;
 }
 function factorial(num){
     if(num==1)
     return 1;
     if(num==0)
     return 1;
     return num*factorial(num-1);
 }
 function fibonacci(num){
     if(num== 1)
     return 1;
     if (num ==0)
     return 0;
     return fibonacci(num-2)+fibonacci(num-1);

 }
 //////////////////////////////////
 let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  } ;
 function outputList(list){
      let result=""
      if(list==null)
        return "printed to console";
     for(let key in list){
            if(key=="value")
             result+= result.concat(list[key])+" ";
             else{
                result+= outputList(list[key]);
             }
     }
     return result;
  }
  
/////////////////////////////////////
function outputListLoop(list){
    let result="";
    //console.log(list)
    for(let key in list){
        if(key=="value")
        result= result.concat(list[key])+" ";
        else{
            let obj1= list[key];
            for(let key1 in obj1){
                if(key1=="value")
                result= result.concat(obj1[key1])+" ";
                else {
                    let obj2=obj1[key1];
                    for(let key2 in obj2)
                    if(key2== "value")
                    result= result.concat(obj2[key2])+" ";
                    else{
                        let obj3= obj2[key2];
                        for(let key3 in obj3){
                            if(key3=="value")
                            result= result.concat(obj3[key3])+" ";
                        }
                    }
                }
            }


        }
    }
    return result+"printed to console"
}
//////////////////////////////
function reverseListLoop(list){
    let result=[];
    //console.log(list)
    for(let key in list){
        if(key=="value"){
        result.unshift(list[key]);
        console.log(typeof result)}
        else{
            let obj1= list[key];
            for(let key1 in obj1){
                if(key1=="value")
                result.unshift(obj1[key1]);
                else {
                    let obj2=obj1[key1];
                    for(let key2 in obj2)
                    if(key2== "value")
                     result.unshift(obj2[key2]);
                    else{
                        let obj3= obj2[key2];
                        for(let key3 in obj3){
                            if(key3=="value")
                            result.unshift(obj3[key3]);
                        }
                    }
                }
            }


       }
    }
    return result.join(" ")+" printed to console"
}
//////////////////////////
function reverseList(list){
    let result=[];
    if(list==null)
    return  " printed to console";
    for(let key in list){
        if(key=="value")
        result.unshift(list[key]);
        else{
            result.unshift(reverseList(list[key]));
        }

    }
            
    return result.join(" ");
}
console.log(reverseList(list))

////////////////////
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
}

function printNames(node){
    console.log(node.name +":" + node.value)
    if(node.children && node.children.length>0 ){
        node.children.forEach(node => {
            printNames(node)
        });
    }
}
printNames(node1)

function printNamesLoop(node){
    console.log(node.name +":" + node.value)
    if(node.children && node.children.length>0 ){
        node.children.forEach(node1 => {
            console.log(node1.name +":" + node1.value);
            if(node1.children && node1.children.length>0 ){
                node1.children.forEach(node2=>{
                    console.log(node2.name +":" + node2.value);
                })
            }

        });
    }

}

printNamesLoop(node1)