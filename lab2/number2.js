function compoundInterest(num1,num2,num3){
    // num1= initial amount
    // num2= annual interest rate
    // num3= number of years to compound
    // n= number of interest applied per year
    let n= 12;
    let rate= num2/100;
    let Amount= num1*((1+(rate/n))**(n*num3));
    return Amount;
}
console.log(compoundInterest(100,10,1));
console.log(compoundInterest(10000,5,10));