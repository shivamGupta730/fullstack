const score=400;
console.log(score);
const balance=new Number(100)
console.log(balance);
console.log(balance.toString().length); // output : 3
console.log(balance.toFixed(2)); // output : 100.00

// *********************** Maths *****************
console.log(Math);
console.log(Math.abs(-4)); // output : 4
console.log(Math.round (4.7)); // output : 5
console.log(Math.ceil(4.2));  // output : 5
console.log(Math.floor(4.7)); // output : 4
console.log(Math.random()); // output : 0.12345678901234567
console.log(Math.min(4,1,2,7,1)); // output : 1
console.log(Math.max(2,1,6,9,3)); // output : 9
console.log((Math.random()*10)+1); // output : 1.1234567890123457
const min=10;
const max=20;

console.log(Math.floor((Math.random()*(max-min+1))+min));
