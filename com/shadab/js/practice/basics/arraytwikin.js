// Way of making array empty

// 1. first technique

var arrayList = ['a','b','c','d','e','f'];  
console.log(arrayList); 
var anotherArrayList = arrayList;  
arrayList = [];  
console.log(anotherArrayList);  
console.log(arrayList);
console.log(anotherArrayList); 

// 2. second technique
arrayList = ['a','b','c','d','e','f'];  
console.log(arrayList); 
arrayList.length=0;
console.log(arrayList); 
console.log(anotherArrayList); 


// 3. Technique
arrayList = ['a','b','c','d','e','f'];  
console.log(arrayList); 
arrayList.splice(0, arrayList.length);
console.log(arrayList);
console.log(anotherArrayList); 

// 4. Methode 4
arrayList = ['a','b','c','d','e','f'];  
console.log(arrayList);
while(arrayList.length){
  arrayList.pop();
}
console.log(arrayList);

// How to find an object is array or not

// JS has Object.prototype.toString to do this
if( Object.prototype.toString.call( arrayList ) === '[object Array]' ) {
    console.log('Array!');
}

 



