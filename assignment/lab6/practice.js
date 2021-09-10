"use strict"
let prompt= require('prompt-sync')();
let user = { 
    name: "John",
    "likes birds": true // multiword property name must be quoted };
}
user.age = 30;
console.log(user["likes birds"])
console.log(user.age)
console.log(user)
console.log(user['age'])
console.log(user['name'])

//////////
let fruit = prompt("Which fruit to buy?"); 
let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit 
};
    console.log( bag.apple ); 

//////    ////////////
let pt1 = {x:1 , y:2};
let pt2 = {x:1 , y:2}; // two independent objects alert( pt1 == pt2); // ??
console.log(pt1 === pt2)// returns false
console.log(pt1 == pt2) // returns false


//////////////////////////
function marry(man, woman) { 
    woman.husband = 'aradom'; 
    man.wife = 'sophia';
    return {
    father: man,
    mother: woman }
}
    let family = marry({ name: "John"}, { name: "Ann"});
    console.log(family.father.name)

    ///////////////////////

  let arr=[1,5,16,3,6, 108]
    arr.forEach(function(char){console.log(char)});
    //arr.forEach(console.log());
    ["a","b","c","d"].forEach(function(char){console.log(char)})
    
    
   arr.forEach(function(){console.log(arr)})

   ///////////////////////////////////////
   const properties=["one","two","three","four"]
   for(let value of properties){
       console.log(value);
       console.log(properties[value]);
   }

   let xx=9;
   let y={xx};
   console.log(y)  // {xx: 9}
    
   function sum(arr){ let tot = 0; return tot; }
    exports = {sum };  // {xx: 9}
    console.log(exports)   // {sum: [Function: sum]}
    console.log(exports.sum)     // exports.sum === [Function : sum]
    console.log(exports.sum([1,2,3]))  //exports.sum([1,2,3] ) ===0
   
   /////////////////////
   //Create 3 objects,student1,student2,student3
   //property studentId : s101, s102, s103 respectively
   //property quiz answers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
   //push the students into an array, quiz
   //write a function, gradeQuiz, that takes the quiz array and an array 
   //of correct answers,e.g., [3,1,2,4] and returns an object that has properties 
   //with the names of each studentId and the value of the property will be their score on the quiz
   //expect { s101: 3, s102: 2, s103: 3 }
   //write a function that takes the grade report object and returns the average score of all the students


let student1 = {studentId:"s101","quiz answers":[1,1,2,4]};
let student2 = {studentId:"s102","quiz answers":[2,1,2,2]};
let student3 = {studentId:"s103","quiz answers":[3,1,3,4]};

let quiz = [student1,student2,student3];
let correctAnswers = [3,1,2,4];

function gradeQuiz(quiz,correctAnswers){
    let result = {};
    for(let student of quiz){
        let score = 0;
        for(let i=0;i<correctAnswers.length ;i++){
            if(student["quiz answers"][i]==correctAnswers[i])
                score++;
        }
        result[student.studentId]=score;
    }
    return result

}

function caluculateAverage(gradeReport){
    let sum = 0, count = 0;
    for(let studentId in gradeReport){
        sum+=gradeReport[studentId];
        count++;
    }
    return sum/count
}

let gradeReport = gradeQuiz(quiz,correctAnswers);
console.log("expect { s101: 3, s102: 2, s103: 3 }",gradeReport);
console.log(caluculateAverage(gradeReport))

