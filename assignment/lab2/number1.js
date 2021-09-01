function salesCommission (input,sales){
     
    let status=""
    if(input){
        if (sales<300){
        status="no commission";
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
console.log(salesCommission(true,300));
console.log(salesCommission(true,300));
console.log(salesCommission(false,700));