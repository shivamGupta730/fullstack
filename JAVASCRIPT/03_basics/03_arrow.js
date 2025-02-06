const user = {
  username: "JohnDoe",
  price: 1000,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website `); // this is use to current context which means current object here for example username is the current context
    console.log(this);
  },
};
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);  // output is { } because we are in node enivironment which means this reffer to the empty

// ************************************** Arrow Function **************************************
// function chai (){
//     let username = "JohnDoe";
//     console.log(this.username);
// }
// chai();  // output is undefined because this is not binded to any object in this case it is global
const chai = () => {
  let username = "JohnDoe";
  console.log(this.username);
};
//  difference between arrow function and normal function is that arrow function does not have its own this context whereas normal function has its own this context
//  second difference is that arrow function does not have its own prototype whereas normal function has its own prototype
// third difference is that arrow function does not have its own arguments object whereas normal function has its own arguments object
//  fourth difference is that arrow function does not have its own super keyword whereas normal function has its own super keyword

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
//  implicit arrow function 
// const addTwo=(num1,num2)=>num1+num2;