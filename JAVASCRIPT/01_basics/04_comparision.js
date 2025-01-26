console.log(2>1);// output : true
console.log(2<1);// output : false
console.log(2>=2); // output : true
console.log(2==1); // output : false
console.log(2!=1); // output : true


console.log("2">1); // output : true
console.log("02">1); // output : true

console.log(null>0); // output : false
console.log(null<0); // output : false
console.log(null==0); // output : false
console.log(null>=0); // output : true

/* 
the reason is that the equality check== and comparsion > < >= <=  work differently.
comparsion convert null to a number  treating it as 0.
That's why null>=0 is true amd null>0 is false.

*/


//  ===  strict check
console.log("2"===2); // output : false





