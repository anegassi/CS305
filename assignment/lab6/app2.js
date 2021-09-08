"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {findTitles,addBook,findIDs,findAuthor }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for(let bookobj of library){
        titles[titles.length]=bookobj.title;
    }
    
    // implement this and other functions
    return titles.sort();
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(title,author,libraryID){
    let newBook = {title,author,libraryID};
    library.push(newBook);
    return newBook;
   // const title = document.getElementById("title"); //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
}

function findIDs(){
    let ids = [];
    for(let book of library){
        ids.push(book.libraryID)
    }
    return ids;
}
function findAuthor() {
    let authors = [];
    for(let bookobj of library){
        authors[authors.length]=bookobj.author;
    }
    
    // implement this and other functions
    return authors;
}
