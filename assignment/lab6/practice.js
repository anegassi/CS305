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

