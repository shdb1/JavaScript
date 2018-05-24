var foo = function bar(){ return 12; };
console.log(typeof foo());
console.log(typeof bar());


/*

The output would be Reference Error. To make the code above work, you can re-write it as follows:

Sample 1

var bar = function(){ return 12; };
typeof bar();  
or

Sample 2

function bar(){ return 12; };
typeof bar();  
A function definition can have only one reference variable as its function name. In sample 1, bar's reference variable points to anonymous function. In sample 2, the function's definition is the name function.

var foo = function bar(){ 
    // foo is visible here 
    // bar is visible here
 	console.log(typeof bar()); // Work here :)
 };
// foo is visible here
// bar is undefined here

*/