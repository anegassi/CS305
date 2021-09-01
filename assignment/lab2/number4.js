function sumDigits(num){
    //console.log(num)
    //console.log(num.split(''))
    let num1=num+""
        let arr=[];
       arr= num1.split('')
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+= parseInt(arr[i]);
    }
    return sum;
}
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));
console.log();

function multiDigits(num){
    let num1=num+"";
    let arr=[];
    arr= num1.split('');
    let product=1;
    for(let i=0;i<arr.length;i++){
        product*=parseInt(arr[i]);
    }
    return product;
}
console.log(multiDigits(1234));
console.log(multiDigits(102));
console.log(multiDigits(8));