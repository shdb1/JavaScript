var x = { foo : 1};
var output = (function(){
    delete x.foo;
    return x.foo;
  })();
  
  console.log(output);
  
  /*
  The output would be undefined.
   The delete operator is used to delete the property of an object. Here,
    x is an object which has the property foo, and as it is a self-invoking function, we will delete the foo property from object x.
   After doing so, when we try to reference a deleted property foo, the result isundefined.
   */