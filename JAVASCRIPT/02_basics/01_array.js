//  array

const myArr=[0,1,2,3,4,5];
console.log(myArr[0]); // output : 0

//  Arrays Methods

myArr.push(6)
console.log(myArr); // output : [0,1,2,3,4,5,6]
myArr.pop();
console.log(myArr); // output : [0,1,2,3,4,5]

console.log(myArr.includes(9)); // output : false
console.log(myArr.indexOf(3)); // output : 3
const newArr=myArr.join()
console.log(newArr); // output : 0,1,2,3,4,5

//  slice , splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3) // output : [1,2]
console.log(myn1); // output : [1,2]

console.log(" B ",myArr); // output : [0,1,2,3,4,5]
const myn2=myArr.splice(1,3) // output : [1,2,3]
console.log(myn2); // output : [1,2,3]

// splice change the original array whereas slice does not change the original array