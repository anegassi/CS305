module.exports={isVowel,computeSalesCommission,compoundInterest,calDownPayment,convertFahrenhiet,calDistance};

function isVowel(char){
    if (char==='a') return true;
    else if(char=='e') return true;
    else if(char=='i') return true;
    else if(char=='o') return true;
    else if(char=='u') return true;
    else return false;
}


function computeSalesCommission(input,sales){
     
    let status=0
    if(input){
        if (sales<300){
        status=0;
        } else if (sales>=300 && sales<=500){
            status= 0.01*(sales);
        } else if( sales>500){
            status= 0.02*(sales);
        }

    } else{
        if(sales>=300 && sales<=500){
            status= 0.02*(sales);
        } else if(sales>500){
            status= 0.03*(sales);
        }
    }
    return status;
}

function compoundInterest(num1,num2,num3){
    // num1= initial amount
    // num2= annual interest rate
    // num3= number of years to compound
    // n= number of interest applied per year
    let n= 12;
    let rate= num2/100;
    let Amount= num1*((1+(rate/n))**(n*num3));
    return Math.floor(Amount);
}

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

function convertFahrenhiet(num1){
    let result= (num1-32)*(5/9);
    return Math.floor(result);
}

function calDistance(x1,y1,x2,y2){
    let distance= Math.sqrt(((x2-x1)**2)+((y2-y1)**2));
    return Math.floor(distance);

}