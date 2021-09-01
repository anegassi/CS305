function calDownPayment(cost){
    let downPayment=0;
    if(cost>=0&&cost<50000){
        downPayment= 0.05*(cost);
    } else if(cost>=50000&& cost<100000){
        downPayment= 2500+(0.1*(cost-50000));
    } else if(cost>=100000 && cost<200000){
        downPayment=7500+(0.15*(cost-100000))
    } else if(cost>=200000){
        downPayment=5000+(0.1*(cost-200000));
    }
    return downPayment;
}
console.log(calDownPayment(40000));
console.log(calDownPayment(50000));
console.log(calDownPayment(100000));
console.log(calDownPayment(200000));
