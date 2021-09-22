////call by context
// function context(){
//     console.log(this);    // will print global since we have not calling it from an object
// }

// obj={ a:1};
// obj.context= context;   // we added the context function as a property of obj

// context();  // this will print undefined global object since we are not calling 
//             // specifically from an object

// obj1={ a:"Hello"} 
// obj1.context= context;

// setTimeout(context,1000);   // will print the function Timeout

////////////////////////////
function area(){
    console.log(this);              // Global 
    console.log(this.side)          //  undefined
    return this.side * this.side; 
    }
    const square1 = {side: 5, area: area};
    console.log(area());                  // NaN

    /////////////////////
    function area(){
        console.log(this);                //   { side: 5, area: [Function: area] }
        return this.side * this.side;
        }
     const    square2 = {side: 5, area: area};
        console.log(square2.area());            // 25

        /////////////
        