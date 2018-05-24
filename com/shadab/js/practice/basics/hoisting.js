Function Expression

var foo = function foo(){ 
 	return 12; 
}; 
In JavaScript, variable and functions are hoisted. Let's take function hoisting first. Basically, the JavaScript interpreter looks ahead to find all variable declarations and then hoists them to the top of the function where they're declared. For example:

foo(); // Here foo is still undefined 
var foo = function foo(){ 
 	return 12; 
}; 
Behind the scene of the code above looks like this:

var foo = undefined;
    foo(); // Here foo is undefined 
 	   foo = function foo(){
 	      / Some code stuff
      }
 var foo = undefined;
 	 foo = function foo(){
 	     / Some code stuff
    }
    foo(); // Now foo is defined here
    
    
    
    ========================================
    
    What will be the output of code below?
var salary = "1000$";

 (function () {
     console.log("Original salary was " + salary);

     var salary = "5000$";

     console.log("My New Salary " + salary);
})();
The output would be undefined, 5000$. Newbies often get tricked by JavaScript's hoisting concept. In the code above, you might be expecting salary to retain its value from the outer scope until the point that salary gets re-declared in the inner scope. However, due to hoisting, the salary value was undefined instead. To understand this better, have a look of the code below:

var salary = "1000$";

(function () {
    var salary = undefined;
    console.log("Original salary was " + salary);

    salary = "5000$";

    console.log("My New Salary " + salary);
})();
salary variable is hoisted and declared at the top in the function's scope. The console.log inside returns undefined. After the console.log, salary is redeclared and assigned 5000$.