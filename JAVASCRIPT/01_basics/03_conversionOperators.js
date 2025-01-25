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
