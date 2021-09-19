"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
module.exports = { makeBank }; //add all of your function names here that you need for the node mocha tests


/* 2.	In the following code the transactionsDB is publicly accessible to any code that has access to the bank object.  
Instead of using the object literal for bank, write a makeBank function that will encapsulate and return the bank object. 
Make the transactionsDB private by making it a local variable in the makeBank function instead of a property on the bank object.  
*/

const bank = { transactionsDB: [], };
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];
/**
 * @returns {bank} factory function that builds and returns bank object
 */
function makeBank(){
    let  transactionsDB=bank.transactionsDB;
    return{
       
        getBalance: function (id) {
            const customer = transactionsDB.find(customer => customer.customerId === id);
            // you can not use this.transactionsDB because this refers to the current object and the object doent have the transationsdatabase
            let balance = 0;
            for (const trans of customer.customerTransactions)
                    { balance += trans; }
            return balance;
        },
        bankBalance:function () {
            let total = 0;
            for (const trans of transactionsDB) {
                total += this.getBalance(trans.customerId);
            }
            return total;
        }
        
    }
    
}

// console.log(makeBank().getBalance(1))
// console.log(makeBank().getBalance(2))
// console.log(makeBank().getBalance(3))
// console.log(makeBank().bankBalance())

// bank.getBalance = function (id) {
//     const customer = this.transactionsDB.find(customer => customer.customerId === id);
//     let balance = 0;
//     for (const trans of customer.customerTransactions)
//             { balance += trans; }
//     return balance;
// };

// bank.bankBalance = function () {
//     let total = 0;
//     for (const trans of this.transactionsDB) {
//         total += this.getBalance(trans.customerId);
//     }
//     return total;
// };
// console.log(bank.getBalance(1))
// console.log(bank.getBalance(2))
// console.log(bank.getBalance(3))
// console.log(bank.bankBalance())

