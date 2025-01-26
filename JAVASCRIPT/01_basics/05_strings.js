const name="shiv";
const repoCount=50;
// console.log(name+repoCount+" Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // output : Hello my name is shiv and my repo count is 50
const gameName=new String("abcdef-g");
console.log(gameName[0]); // output : a
console.log(gameName.__proto__); // output : String {}

console.log(gameName.length); // output : 6
console.log(gameName.toLowerCase()); // output : abcdef
console.log(gameName.toUpperCase()); // output : ABCDEF
console.log(gameName.charAt(2)); // output : c
console.log(gameName.indexOf('e')); // output : 4

const newString=gameName.substring(0,4); 
console.log(newString); // output : abcd

const anotherString=gameName.slice(-2,4);
console.log(anotherString); // output : cd

const newString1="   shiv   "
console.log(newString1);
console.log(newString1.trim());

const url="https:www.google.com";
console.log(url.replace("https:","http:")); // output : http:www.google.com

console.log(url.includes("shiv")); // output : false

console.log(gameName.split('-')); // output : [ 'abcdef', 'g' ]


