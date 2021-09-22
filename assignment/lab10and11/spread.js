"use strict";

const { log } = require("console");

// const { log } = require("console");

// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
//  */
module.exports = { copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests
//
function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function printName(node) {

      /* the node reduction */
      console.log("name:", node.value)
      if (node.descendents !== null)
      for (let child of node.descendents) {
          printName(child)
      }
  }
  printName(abe);

  

function logNames(root) {
  console.log(root.value);
  if (root.descendents.length != 0) {
    for (let i = 0; i < root.descendents.length; i++) {
      logNames(root.descendents[i]);
    }
  }
}

function contains(tree, name) {
  if (tree.value == name) return true;
  if (tree.descendents && tree.descendents.length > 0) {
    for (let item of tree.descendents) {
      if (contains(item, name)) {
        return true;
      }
    }
  }
  return false;
}


function findSubTree(tree, value) {
  if (tree.value == value) return tree;
  else if (tree.descendents != 0) {
    for (let child of tree.descendents) {
      if (contains(child, value)) {
        return findSubTree(child, value);
      }
    }
  }
  return null;
}

function ListNode(node, next) {
  this.node = node;
  this.next = next;
}


function createList() {
  let listNode = new ListNode(abe.value);
  listNode.next = new ListNode(homer.value);
  listNode.next.next = new ListNode(bart.value);
  listNode.next.next.next = new ListNode(lisa.value);
  listNode.next.next.next.next = new ListNode(maggie.value);
  console.log(JSON.stringify(listNode));
}


function findListNode(list, target) {
  if (list.node == target) return list;
  if (list.next == null) return null;
  return findListNode(list.next, target);
}


function allCaps(node) {
   node.value = node.value.toUpperCase();
}

function addStars(node) {
    node.value=   "***" + node.value + "***";
    
}

function reverseNode(node) {
  let temp = [...node.value];
  let a = temp.reverse();
  let b = a.join("");
   node.value = b;
}
function modiferFunc(node){
  allCaps(node);
   addStars(node);
    reverseNode(node);

}


function treeModifier(tree, modiferFunc) {
  modiferFunc(tree);
  
  if (tree.descendents.length != 0) {
    for (let child of tree.descendents) 
      treeModifier(child, modiferFunc);
  }
}
treeModifier(abe,modiferFunc);
let accomulatedName = [];

function treeCollector(tree) {
  accomulatedName.push(tree.value);
  if (tree.descendents.length > 0) {
    for (let ch of tree.descendents) {
      treeCollector(ch);
    }
  }
}

function copyArray(arr) {
  return [...arr];
}

function concat(arr1, arr2) {
  return [...arr1, ...arr2];
}

function findMin(...numbers) {
  let min = Number.MAX_VALUE;
  for (let num of numbers) {
    if (num < min) min = num;
  }
  return min;
}

function combineObjs(obj1, obj2) {
  let newObj = {
    ...obj1,
    ...obj2,
  };
  return newObj;
}