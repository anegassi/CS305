function convertFahrenhiet(num1){
    let result= (num1-32)*(5/9);
    return result;
}
console.log(convertFahrenhiet(32));
console.log(convertFahrenhiet(0));
console.log(convertFahrenhiet(212));
console.log(convertFahrenhiet(100));