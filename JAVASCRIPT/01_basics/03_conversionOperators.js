let score=33;

console.log(typeof score); // Output: "number"

score="33";
console.log(typeof score); // Output: "string"

let valueInNumber=Number (score)
console.log(typeof valueInNumber); // Output: "number"

score="33abc"
 let value=Number (score)
 console.log(typeof value );// output : "number" but it will be NaN (Not a Number) because it contains non-numeric
 console.log(value); // Output: NaN


//  "33"=> 33
//  "33abc" => NaN
// true =>1 ; false => 0

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // Output: true


// ***********************      operations  *************************************
let val=3;
let negVal=-val
console.log(negVal); // Output: -3

console.log(2+2);// output : 4
console.log(2-2);// output 0
console.log(2*2);// output 4
console.log(2/3);// output 0.6666666666666666
console.log(2**3);//output 8
console.log(2%3);//output 2

let str1="hello"
let str2=" world"
console.log(str1+str2); // Output: "hello world"
console.log("1"+2);//output "12"
console.log(1+"2"); //output "12"
console.log("1"+2+2); // output "122"
console.log(1+2+"2"); // output "32"
