let num = [0,1,2,3];

    let numbers = JSON.stringify(num);
    console.log(numbers);
numbers = JSON.parse(numbers);
console.log(numbers,numbers[2]);
num[0]="original"
console.log(numbers,num)