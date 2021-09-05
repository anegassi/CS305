function ask(question, yes, no) { 
    if (false) yes()
     else no();
}
function showOk() {
console.log( "You agreed." ); 
}
function showCancel() {
console.log( "You canceled the execution." );
}

ask("Do you agree?", showOk, showCancel);
////////////////////////////////
function ask2(question, yes, no) {
    if (true) yes()
    else no();
 }

    ask2( "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); })

    