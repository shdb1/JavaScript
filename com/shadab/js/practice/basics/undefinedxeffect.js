var trees = ["xyz","xxxx","test","ryan","apple"];
delete trees[3];
console.log(trees.length);
  
/*
 The output would be 5. When we use the delete operator to delete an array element, the array length is not affected from this. This holds even if you deleted all elements of an array using the delete operator.
In other words, when the delete operator removes an array element, that deleted element
 is not longer present in array. In place of value at deleted index undefined x 1 in chrome and 
 undefined is placed at the index. If you do console.log(trees) 
output ["xyz", "xxxx", "test", undefined × 1, "apple"] in Chrome and in Firefox ["xyz", "xxxx", "test", undefined, "apple"]. 
 
 */