"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
*/

const bank = {
    transactionsDB: []
};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];
   // bank.transactionsDB[0] this is how we access the 1st element
   // and it returns object
   // bank.transactionsDB[0].customerTransactions[1] this returns 50
   // bank.transactionsDB[1].customerId returns 2
   // bank.transactionsDB[2].customerTransactions returns [5,-5,55]

bank.saveTransaction = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    customer.customerTransactions.push(amount);

};

bank.debit = function (id, amount) {
    const currentbalance=this.getBalance(id)
    if(currentbalance>amount){
       this.saveTransaction(id,-amount)

    }
    /* make sure current balance is > amount */
//IMPLEMENT THIS
};

bank.credit = function (id, amount) {
    const balance = this.getBalance(id);
    //balance.balance += amount;
    this.saveTransaction(id, amount);
    
}

bank.getBalance = function (id) {

let sum=0;
const customer = bank.transactionsDB.find(customer => customer.customerId === id);
for(let x of (customer.customerTransactions))
   sum+=x
   return sum;
};



/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function () {
    let sum=0;
    for(let customer of bank.transactionsDB){
        sum+=bank.getBalance(customer.customerId)
    }

return sum;
   
};

console.log("total balance should be 85: ", bank.bankBalance());
 bank.credit(1, 20);
 bank.debit(1, 1000);
 console.log("total should now be 105: ", bank.bankBalance());
 console.log(bank)
 

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = {bank }; //add all of your object names here that you need for the node mocha tests