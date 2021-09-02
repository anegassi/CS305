const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const compoundInterest = methods.compoundInterest;
const calDownPayment=methods.calDownPayment;
const convertFahrenhiet=methods.convertFahrenhiet;
const calDistance=methods.calDistance;
// const calcDownpayment = methods.calcDownpayment;

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

describe("compoundInterest", function () {
    it("110.47 is the compoundInterest", function () {
        assert.equal(compoundInterest(100,10,1), Math.floor(110.47));
    });
    it("16470.09 compoundInterest", function () {
        assert.equal(compoundInterest(10000,5,10),Math.floor(16470.09));
    });
});

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

describe("calDistance", function () {
    it("calDistance", function () {
        assert.strictEqual(calDistance(0,0,5,5), Math.floor(7.07));
    });
});