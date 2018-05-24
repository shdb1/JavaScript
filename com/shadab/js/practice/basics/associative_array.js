If we have a JavaScript associative array
var counterArray = {
    A : 3,
  	B : 4
};
counterArray["C"] = 1;
How can we calculate the length of the above associative array's counterArray?
There are no in-built functions and properties available to calculate the length of associative array object here. However, there are other ways by which we can calculate the length of an associative array object. In addition to this, we can also extend an Object by adding a method or property to the prototype in order to calculate length. However, extending an object might break enumeration in various libraries or might create cross-browser issues, so it's not recommended unless it's necessary. Again, there are various ways by which we can calculate length.

Object has the keys method which can be used to calculate the length of an object:


We can also calculate the length of an object by iterating through an object and by counting the object's own property.  

```javascript
function getSize(object){
  var count = 0;
  for(key in object){
    // hasOwnProperty method check own property of object
    if(object.hasOwnProperty(key)) count++;
  }
  return count;
}
We can also add a length method directly on Object:

Object.length = function(){
  	var count = 0;
  for(key in object){
    // hasOwnProperty method check own property of object
    if(object.hasOwnProperty(key)) count++;
  }
  return count;
}
//Get the size of any object using
console.log(Object.length(counterArray))
Bonus: We can also use Underscore (recommended, As it's lightweight) to calculate object length.