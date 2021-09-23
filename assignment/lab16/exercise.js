/**
 * inheritance in javascript
 */
let animal= {
    isSleeping:false,
    walk: function(){
        if(!this.isSleeping){
            console.log(`I walk`);
        }
    },
    sleep: function(){
          this.isSleeping= true;
    }
}
let rabbbit ={
        name: "White Rabbit",
        __proto__:animal               // inheriting from parent 
};

console.log(rabbbit.isSleeping);          // false
console.log("new line")
rabbbit.sleep();
console.log(rabbbit.isSleeping);         // true
console.log(animal.isSleeping)          // false
console.log(animal.walk());             // I walk
console.log(rabbbit.walk());            // undefined




/**
 * 
 */
class User {
    constructor (name){
        this.name= name;
        this.method2= function (){
            console.log(" here");
        }
    }
    sayHi(){
        console.log(this.name);
    }
}
console.log(User);            // [class User]


let user= new User("John");

for(let key in user){
    console.log(key);
}
// name
// method2  
 user.sayHi();              // John


/**
 * after extends always use super to get access to the parent
 */
class Animal{
    constructor(name){
        this.speed= 0;
        this.name= name;
    }
    run(speed){
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        this.speed= 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    constructor (name){
        super(name)              // remember to include super() when extending from parent
        this.name = name;
    }
    #secret= 10   // to make it visibile only in private use # before assigning the variable
    hide(){
        console.log(`${this.name} hides`);
    }
    stop(){
        // super.stop();   // call parent and stop
        this.hide();     // 
    }
    static staticMethod(){
        console.log(" StaticMethod");
    }
    static staticVar = 10
}

Rabbit.prototype.start= function(){        // to add  methods to class from outside
    console.log(" Add method to class");
}
let rabbit= new Rabbit("White Rabbit", 10);
rabbit.stop();                              // White Rabbit hides
console.log(rabbit.secret);                 // undefined because secret is not accessible since its private #
rabbit.secret= 20;
console.log(rabbit.secret);                //  20
Rabbit.staticMethod();                     // StaticMethod
console.log(Rabbit.staticVar);              //    10
rabbit.start = function(){                // adding function to class rabbit only form outside
    console.log(" i started");             // over riding the previous function 
}
rabbit.start();                          // i started

let rabbit2 = new Rabbit("Black Rabbit", 10);
console.log(rabbit2);                      // Rabbit { speed: 0, name: 'Black Rabbit' }
console.log(rabbit2.start);                //  Function (anonymous)]  still have access to the function
console.log(rabbit2.start());              //   Add method to class