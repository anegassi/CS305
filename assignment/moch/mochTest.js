/**
 * 1. Create Tree Node for the tree(refer attachment)

2. Write a program to count number of nodes in the trees(excluding root node).

console.log("expect 5:",countNodes(root));

3. Write a program to add property , parent with value 'true' to the nodes that have children( not to the leaf nodes).

4. Write a program to return list all leaf nodes( that have no children).

console.log(" expect [ 'Finance Manager', 'HR Manager', 'Research Director' ]",listAllLeaves(root));

5. Create an array of objects with count of children and  name of the node as properties

flattenTree(root) ->

[
  { name: 'Finance Manager', children: 0 },    
  { name: 'HR Manager', children: 0 },
  { name: 'Administration VP', children: 2 },  
  { name: 'Research Director', children: 0 },  
  { name: 'Investment VP', children: 1 },      
  { name: 'President', children: 2 }
]
 */

// const { count } = require("console")

// function TreeNode(name,children){ this.name =name;
//     this.children = children;
//     }
//     let financeManager = new TreeNode("Finance Manager");
//     let hrManager = new TreeNode("HR Manager");
//     let researchDirector = new TreeNode("Research Director");
//     let adminVP = new TreeNode("Administration VP",[financeManager,hrManager]); let investmentVP = new TreeNode("Investment VP",[researchDirector])
//     let root = new TreeNode("President",[adminVP,investmentVP]);


function treeNode(name) {
    this.name = name
    this.descendents = []
}
let president = new treeNode("President")
let adminVP = new treeNode("adminVP")
let investVP = new treeNode("investVP")
let researchDR = new treeNode("researchDR")
let managerHR = new treeNode("managerHR")
let managerFS = new treeNode("managerFS")

president.descendents.push(adminVP, investVP)
investVP.descendents.push(researchDR)
adminVP.descendents.push(managerHR, managerFS)

function countnode(node) {
    let count = 0;
    if (node.descendents && node.descendents.length > 0) {
        for (let child in node.descendents) {
            count++;
            count = count + countnode(child);
        }
    }
    return count;
}
console.log(countnode(president))

function countNodes(tree) {

    let count = 0;
    if (!tree.descendents || tree.descendents.length == 0)
        return 0;
    for (let child of tree.descendents) {
        count = count + countNodes(child);

    }
    return count + tree.descendents.length;
}
console.log(countNodes(president))


function addProperty(node) {
    if (node.descendents && node.descendents.length > 0) {
        node.parent = true;
        for (let child in node.descendents)
            addProperty(child)
    }
}


addProperty(president)
console.log(JSON.stringify(president));

// function addParent(tree){
//     if(!tree.children || tree.children.length==0)
//     return;
//     tree.parent = true;
//     for(let child of tree.children){
//     addParent(child);
//     }
//     return;
//     }
//     addParent(president)
//     console.log(JSON.stringify(root));

//     4,
function listAllLeaves(node) {
    let arr = []
    if (node.descendents && node.descendents.length > 0) {
        for (let child in node.descendents)
            arr = arr.concat(listAllLeaves(child))
    }
    arr = arr.push(node.name)
    return arr;
}
console.log(listAllLeaves(president))

function listAllLeaves2(tree) {
    let leaves = [];
    if (!tree.descendents || tree.descendents.length == 0)
        return tree.name;
    for (let child of tree.descendents) {
        leaves = leaves.concat(listAllLeaves2(child));
    }
    return leaves;
}

console.log(listAllLeaves2(president))

///5
function flattenTree(node) {
    let arr = []
    let obj = new flttreeobj(node.name, count2(node))
    arr.push(obj)

    if (node.descendents && node.descendents.length > 0) {
        for (let child in node.descendents) {
            arr.concat(flattenTree(child))
        }

    }
    return arr;
}

function flttreeobj(name, children) {
    this.name = name
    this.children = children
}

function count2(node) {
    let count = 0;
    if (node.descendents && node.descendents.length > 0) {
        for (let child in node.descendents)
            count++
        return count;
    }
}

console.log(flattenTree(president))

//5
function flattenTree(tree) {
    let array = [];
    if (!tree.children || tree.children.length == 0)
        return { name: tree.name, children: 0 };
    for (let child of tree.children) {
        array = array.concat(flattenTree(child));
    }
    array = array.concat({ name: tree.name, children: tree.children.length })
    return array;
}


// /**
//  * a. Create a timer function that increments and  prints the counter until stopped. 

// run-  increments and print the counter from 0 or previous counter value if present

// stop -  Stop the timer and reset the counter to 0 if reset is true.

// b. Create Scheduler function to run the above timer every 10 ms and stop it after one second. 


//  *  
//  * */
function createTimer() {
    let counter = 0;
    return {
        run: function () {
            console.log(counter++);
        },
        stop: function (timerId, reset) {
            console.log(" STOP ")
            clearInterval(timerId);
            if (reset)
                counter = 0;
        }
    }
}
function scheduler() {
    let timer = createTimer();
    let timerId = setInterval(timer.run, 10);
    setTimeout(timer.stop, 100, timerId, true);
}
scheduler();



// /**
//  * Create a function makeCaluculator that returns the inner functions to perform the addition,subtraction and multiplication.

// Inner function can take any number of arguments (use spread operator). (use reduce )

// console.log("expect 10:",makeCaluculator().add(1,2,3,4));

// console.log("expect -19:",makeCaluculator().subtract(3,1,8,9,4));

// console.log("expect 3:",makeCaluculator().multiply(3));
//  */     

function makeCaluculator() {
    return {
        add: function (...more) {
            return more.reduce((sum, current) => sum + current)
        },
        subtract: function (...more) {
            return more.reduce((sum, current) => sum - current)
        },
        multiply: function (...more) {
            return more.reduce((product, current) => product * current, 1)
        },
    }
}





// /////////
// let json = {
//     "glossary": {
//         "title": "example glossary",
// 		"GlossDiv": {
//             "title": "S",
// 			"GlossList": {
//                 "GlossEntry": {
//                     "ID": "SGML",
// 					"SortAs": "SGML",
// 					"GlossTerm": "Standard Generalized Markup Language",
// 					"Acronym": "SGML",
// 					"Abbrev": "ISO 8879:1986",
// 					"GlossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
// 						"GlossSeeAlso": ["GML", "XML"]
//                     },
// 					"GlossSee": "markup"
//                 }
//             }
//         }
//     }
// }     
// ////////////////////////////////    
//  console.log (data.glossary.GlossDiv.GlossList.GlossEntry.Acronym)

//  console.log (data.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso.length)

//console.log(data.glossary.GlossDiv.GlossList.GlossEntry.Acronym)
//console.log(data.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso.length)

//  /**
//   * Create a function to replace key with value in an object. Assume the property values are only strings.

// convertKeyToValue({key1:"value1",key2:"value2",key3:"value3"})->

// { value1: 'key1', value2: 'key2', value3: 'key3' }
//   */
// convertKeyToValue(obj){
//     let obj2={}
//   for(let key in obj){
//        obj2[obj.key] = key;
// }  
// return obj2;
// }
// convertKeyToValue({key1:"value1",key2:"value2",key3:"value3"})
let json={key1:"value1",key2:"value2",key3:"value3"};
function convertKey(json) {
    for (let key in json) {
        let value = json[key];
         json[value] = key; 
         delete json[key];
    }
    return json;
}

console.log(convertKey(json));
//console.log(json)