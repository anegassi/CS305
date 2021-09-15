const player1 = {name: "Bob", points: [1, 2, 1,8]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};

const players = [player1, player2, player3];

function averagepoints(arr){
    return arr.reduce((Acc,player)=>{
        let sum=player.points.reduce((sum,point)=>{return sum+point;},0);
        let average=sum/player.points.length;
        Acc[player.name]=average;
        return Acc
    },{});
}
console.log(averagepoints(players))

function reorder(str){
    let arr= str.split(' ');
    let arr2=arr.sort((a,b)=> {return b.length-a.length});
    return arr2.join(' ')
}
console.log(reorder("JavaScript is the world's most popular programming language"));
////////////////////////////////////
const numbers = [[1, 5],[ 18, 2], [77, 108]];
let myArray=[];

numbers.forEach(element=>{
    myArray.push(element.filter(inside=>inside%2==0))})

console.log(myArray)
/////////////////////////////////
let array= [{name:"ram",age:29}, {name:"syam",age:40}, {name:"ganga",age:49}];

console.log(array.map((pname,index)=>{return pname.name+" :"+index}))   //  [ 'ram :0', 'syam :1', 'ganga :2' ]
console.log(array.map((pname,index)=>{return pname.name+" :"+pname.age}))   // [ 'ram :29', 'syam :40', 'ganga :49' ]
console.log(array.reduce((sum,obj)=>{return sum+obj.age},0))
////the oldest man

let Pobject=array[array.reduce((max,obj,index)=>{
    let Mindex
    if(obj.age>max){ 
      Mindex=index;
    }
    return Mindex;
},0)];
console.log(Pobject)                // { name: 'ganga', age: 49 }
console.log(Pobject.name)           // ganga
console.log(Pobject.age)            //  49

let ppobject=array.filter(obj=>obj.age==(array.reduce((max,obj,index)=>{
    let Mindex
    if(obj.age>max){ 
        Mindex=index;
      return obj.age
    }
    return max;
},0)));
console.log(ppobject)
console.log(ppobject.name)
console.log(ppobject.age)


///////////////////