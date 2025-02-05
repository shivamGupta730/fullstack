function sayMyName(){
    console.log('S');
    console.log('H');
    console.log('I');
    console.log('V');

}
// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log( number1 + number2 ); here we are using console.log to print the result of the addition of two numbers which are
        // result variable
// }
// function addTwoNumber( number1, number2 ){
//     let result = number1 + number2;
//     return result
// }
function addTwoNumber( number1, number2 ){
    return number1 + number2;
}
const result=addTwoNumber(3,4)
// console.log(result)
function loginUserMessage(username){
    if(username===undefined){
     return ` Please enter your username`;
    }
    else{
    return `${username} just logged in`
}
}
// console.log( loginUserMessage('SHIV') );
 console.log( loginUserMessage() );
 function calculateCartPrice(...num1){ //... this is called rest operator which is used to pass multiple arguments to a function
    return num1;
 }
console.log(calculateCartPrice(200, 400, 500));

