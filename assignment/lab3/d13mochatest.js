const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const compoundInterest = methods.compoundInterest;
const calDownPayment=methods.calDownPayment;
const convertFahrenhiet=methods.convertFahrenhiet;
const calDistance=methods.calDistance;
// const calcDownpayment = methods.calcDownpayment;

/**
 * This function computes commission of a salaried and non salaried
 * sales man
 * @param {boolean} input whether the salesman is salaried or not
 * @param {number} sales the salesamount
 * @returns {number} status the amount of commission the salesman makes
 */
describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () { 
        assert.strictEqual(computeSalesCommission(false, 200), 0); });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});
//////////////////################/////////////////////////

/**
 * This function computes the down payment of a house
 * @param {number} cost the cost of the house
 * @returns {number} downPayment the amount of down payment required
 */
describe("calcDownpayment",function(){
    it("calcDownpayment",function(){
        assert.equal(calDownPayment(40000),2000)
    })
    it("calcDownpayment",function(){
        assert.equal(calDownPayment(50000),2500)
    })
    it("calcDownpayment",function(){
        assert.equal(calDownPayment(100000),7500)
    })
    it("calcDownpayment",function(){
        assert.equal(calDownPayment(200000),22500)
    })
})

/**
 * This function checks if a given character is a vowel or not
 * @param {string} char the charater to be check if it is vowel or not
 * @returns {boolean} Boolean if the result is true or false
 */
describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

/**
 * This function computes the compound interest collected in a given time
 * @param {number} num1 the principal amount 
 * @param {number} num2 the interest rate collected 
 * @param {number} num3 the period of time interest collected
 * @returns {number} Amount the compound interest collected
 */
describe("compoundInterest", function () {
    it("110.47 is the compoundInterest", function () {
        assert.equal(compoundInterest(100,10,1), Math.floor(110.47));
    });
    it("16470.09 compoundInterest", function () {
        assert.equal(compoundInterest(10000,5,10),Math.floor(16470.09));
    });
});

/**
 * This function converts temprature reading from celsius to fahrenhiet
 * @param {number} num1 the celsius reading
 * @returns {number} result the relative fahrenhiet reading
 */

describe("convertFahrenhiet",function(){
    it("convertFahrenhiet",function(){
        assert.equal(convertFahrenhiet(32),0);
    })
    it("convertFahrenhiet",function(){
        assert.equal(convertFahrenhiet(0),Math.floor(-17.7778));
    })
    it("convertFahrenhiet",function(){
        assert.equal(convertFahrenhiet(212),100);
    })
    it("convertFahrenhiet",function(){
        assert.equal(convertFahrenhiet(100),Math.floor(37.7778));
    })
})
/**
 * This function calculates the distance between two points in x and y cordinates
 * @param {number} x1,y1,x2,y2 the coordinates of the two points in x and y axis
 * @returns {number} distance the distance between the two points
 */

describe("calDistance", function () {
    it("calDistance", function () {
        assert.strictEqual(calDistance(0,0,5,5), Math.floor(7.07));
    });
});