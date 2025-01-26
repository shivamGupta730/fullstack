// Dates
let myDate=new Date();
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate); // output : object

let myCreatedDate=new Date(2024,0,26)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
// time in this always in milliseconds

//  to convert in seconds 
console.log(Math.floor(Date.now()/1000)); // output : 1661583600

