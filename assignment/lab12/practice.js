/**
 * 1. destructure the team object onto variables with the same names as the properties
 */
 let team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" } 
 
  let { point, shooting,power="one",small,center } = team ;     
  
  console.log("expect Big Sleep", center);     // Big Sleep
 console.log("expect Jim", power);              // Jim
 /**
  * 2. destructure the team onto variables: one (point guard), two (shooting guard),
  *  three (small forward), four (power forward) and five (center)
  */
let { point: one, shooting: two, power:four, small: three, center: five } = team;
console.log("expect Jim: ", four);    // Jim
console.log("expect Bob: ", one);       //  Bob
/**
 * remove first two properties from team and 
 * have a default value in destructuring
 */
 team = { point, shooting,power:"Jim",small:"Al",center:"Big Sleep" } 
 
 let { one1="orange", shooting1="mango", small1, four1=power,center1=five} =team;
 console.log(one1)             // orange
 console.log(shooting1)        // mango
 console.log(small1)           // undefined
 console.log(four)             // Jim
/**
 * changing obj to JSON and JSON back to obj and they objects are not equall
 */
let student= {
  name:"John",
  age: 30,
  isAdmin: false,
  courses: [`html`,'css','js'],
  wife: null
}
let json= JSON.stringify(student);
console.log(json);  // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
let student1= JSON.parse(json);
console.log(student1);
console.log(student=== student1);  // false coz they are referring to different locations
student.name= "Peter";
console.log(student,student1);  // they are not equal
/**
 * use built-in method " Object.entries(obj)"
 * returns array of key/value pairs for an object
 * this is works smilar as for..in but can print the key and value at the same time
 */
 let object1= {
  name:"John",
  age: 30,
  isAdmin: false,
  courses: [`html`,'css','js'],
  wife: null
}
function print1(){
 for(let key in object1){
  console.log(key, object1[key]);  // we are printint key and value separate
}
}
print1(object1);
function print(){
 for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
  
} 
print(object1);
/**
 * can pass parameters as an object, and the function destructures them into parameters:
 */
 let options = {
  title: "My menu",
  items: ["Item1", "Item2"] };
  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
   // title, items – taken from options,
  // width, height – defaults used
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
 }
  showMenu(options);
  /**
   * wrap destructuring expression in parentheses (---)
   * use existing variables without let. there’s a catch.
   * if we didnot use "()" then the result will be global 
   * or from the above reference and we might not get the same results as below
   */
  //  ({title, width, height} = {title: "Menu", width: 200, height: 100});
  //  console.log(title);    // Menu
  //  console.log(width);     // 200
  //  console.log(height);    // 100
   /**
    * Destructure property to another name
    * to assign a property to a variable with another name, set it using a colon
    * change names of variables
    */
    options = {
      title: "Menu", width: 100, height: 200
      };
       //{ sourceProperty: targetVariable }
        let {width: w, height: h, title} = options;
      // width -> w // height -> h // title -> title
      console.log(title); // Menu 
      console.log(w); // 100 
      console.log(h); // 200
      /**
       * missing and default values
       * Absent values are considered undefined:
       * Extra values are ignored
       */
       let [firstName, surname] = [];
        console.log(firstName); // undefined 
        console.log(surname); // undefined
      
       //If we want a “default” value to replace the missing one, we can provide it using =:
       let [name = "Guest", lastname = "Anonymous"] = ["Julius"];
       console.log(name); // Julius (from array)
       console.log(lastname); // Anonymous (default used)
       // we can destructure array to obj and to array 
       // but we can not destructure obj to array
       /**
        * Destructuring mixed array 
        */
       let mixedArray= [[1,2],[3,4],"hello",{a:1}];
       let [key1,key2,key3,key4]= mixedArray;
       console.log(typeof key1, typeof key2, typeof key3,typeof key4)
                 // object       object          string     object
       /**
        * object
        */
       let user={};
       [user.key1, user.key2]=["Value1","Value2"];
       console.log(user.key2)    // Value2
       /**
        * destructuring with rest
        */
       //let [...rest]=["Julius","Caesar","Consul","of the Roman Republic"];
       //console.log(rest)
       /**
        * 
        */

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
 console.log(name1); // Julius
console.log(name2); // Caesar
// Note that type of `rest` is Array. 
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic alert(rest.length); // 2
/**
 * create and log to the console a json string from john. Then create a new instance
 * of john, johnClone, using JSON.parse. Is john === johnClone?
 */
 
let john = {
  name: "John",
  surname: "Smith",
  isAdmin: false,
  birthday: {year: 2000, month: "February", day: 3}, 
  friends: [0,1,2,3]
  }
  let John= JSON.stringify(john);
  console.log(John);
  let johnClone=JSON.parse(John);
  console.log(johnClone);
  console.log(johnClone==John);   // false
  /**
   * 
   */