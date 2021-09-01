let prompt= require('prompt-sync')();
let commission;
let salesman= prompt("Enter salaried or notsalaried:  ");
let sales= parseInt(prompt("Enter the sales amount: "));

if (salesman == 'salaried') {
    if (sales < 300) {
        commission = 0;
    } else if (sales >= 300 && sales < 500) {
        commission = 0.01 * sales;
    } else if(sales >= 500) {
        commission = 0.02 * sales;
    }
} else {
    if(sales>300 && sales<500 ){
        commission = 0.02*sales;
    } else if (sales>500){
        commission = 0.03*sales;
    }
}
 console.log(commission);