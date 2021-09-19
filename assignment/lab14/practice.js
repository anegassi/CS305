function makeArmy(){
    let shooters=[];
    let i=0;
    let count=0;
    while(i<10){
        //let count=0
        let shooter=function(){
            console.log(i,++count);
        }
        shooters.push(shooter);
        i++
    }
    return shooters;
}
let army=makeArmy();
army[0]()
army[2]()
army[0]()
army[9]()
/**
 * 
 */
// function createShooter(i){
//     return function(){
//         console.log(i);
//     }
// }
// function makeArmy(){
//     let shooters=[];
//     let i=0;
//     while(i<10){
//         shooters.push(createShooter(i));
//         i++;
//     }
//     return shooters;
// }
// let army=makeArmy();
// army[0]()
// army[0]()
// army[0]()
/**
 * 
 */
// function makeArmy(){
//     let shooters=[];
//     for(let i=0;i<10;i++){
//         let shooter= function (){
//             console.log(i);
//         }
//         shooters.push(shooter);
//     }
//     return shooters;
// }
// let army= makeArmy();
// army[0]();
// army[1]();
// army[2]();