// singleton 
//  what is singleton  A Singleton in JavaScript is a design pattern that ensures that a class or module has only one instance throughout the application and provides a global point of access to that instance.
//  Example to create a singleton in JavaScript is :- object.create
// object literals
const mySym=Symbol("key1")
//  to use symbol in object we need to use bracket notation like [mySym] = "value1";
const JsUser={
    name:"John",
    "full name":" John Doe",
    [mySym]:"value1",
    age:30,
    location :"New York",
    email: "john@gmail.com",
 isLoggedIn: false ,
 lastLoginDays:["Monday" ,"Saturday"]
}
// this is the format to print object in js
console.log(JsUser["full name"]);
// this is the format to print symbol in js
console.log(JsUser[mySym]);

// to change the value in object
JsUser.email ="johndoe@gmail.com"
// to make sure that n one change the value of the object we use freeze method
// Object.freeze(JsUser);

//  to add function in the object
JsUser.greeting = function(){
    console.log("hello js user");
}

// console.log(JsUser.greeting);// output : function anomynous 
// console.log(JsUser.greeting());
