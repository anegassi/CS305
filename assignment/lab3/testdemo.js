"use strict";
const assert = require('assert');
const functionModule = require('./functions.js');
const checkPrime = functionModule.checkPrime;
// const ssReverse = functionModule.ssReverse;
 
describe("checkPrime returns true if argument is prime", function(){
it("37 is prime", function(){
 assert.strictEqual(checkPrime(37), true);
});
it("77 is not prime", function(){
 assert.strictEqual(checkPrime(77), false);
});
});
 
// describe("ssReverse", function(){
// it("[1,2,3,4]", function(){//test array equality
//  assert.deepStrictEqual(ssReverse([1,2,3,4]), [4,3,2,1]);
// });
// });

// to run mocha on the comand write the following
//mocha testdemo.js