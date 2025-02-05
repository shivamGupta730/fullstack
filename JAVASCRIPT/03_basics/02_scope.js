

// Scope in JavaScript refers to the region of the code where a variable is defined and can be accessed. In this example, we will demonstrate the different types of scope in JavaScript.

// **Global Scope**
// ----------------

// Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

```javascript
// Global variable
let globalVariable = 'I am global';

function globalScopeExample() {
  console.log(globalVariable); // Outputs: I am global
}

globalScopeExample();
console.log(globalVariable); // Outputs: I am global
```

// **Function Scope**
// -----------------

// Variables declared within a function have function scope. They can only be accessed within that function.

```javascript
function functionScopeExample() {
  // Function variable
  let functionVariable = 'I am function';

  console.log(functionVariable); // Outputs: I am function
}

functionScopeExample();
// console.log(functionVariable); // Error: functionVariable is not defined
```

// **Block Scope**
// ----------------

// Variables declared within a block (e.g., if statement, loop, etc.) have block scope. They can only be accessed within that block.

```javascript
if (true) {
  // Block variable
  let blockVariable = 'I am block';

  console.log(blockVariable); // Outputs: I am block
}

// console.log(blockVariable); // Error: blockVariable is not defined
```

// **Let and Const**
// -----------------

// `let` and `const` keywords have block scope, whereas `var` has function scope.

```javascript
if (true) {
  let letVariable = 'I am let';
  const constVariable = 'I am const';
  var varVariable = 'I am var';

  console.log(letVariable); // Outputs: I am let
  console.log(constVariable); // Outputs: I am const
  console.log(varVariable); // Outputs: I am var
}

// console.log(letVariable); // Error: letVariable is not defined
// console.log(constVariable); // Error: constVariable is not defined
console.log(varVariable); // Outputs: I am var
```

// **Scope Chain**
// ----------------

// When a variable is not found in the current scope, JavaScript looks for it in the outer scope, and so on, until it reaches the global scope.

```javascript
let globalVariable = 'I am global';

function outerFunction() {
  let outerVariable = 'I am outer';

  function innerFunction() {
    let innerVariable = 'I am inner';

    console.log(innerVariable); // Outputs: I am inner
    console.log(outerVariable); // Outputs: I am outer
    console.log(globalVariable); // Outputs: I am global
  }

  innerFunction();
}

outerFunction();
```
 console.log(addOne(5));
function addOne(number1){
  return number1 + 1;
}
//  addOne function does not not give error because it is global function and it is called in global scope.

//  where as
 
addTwo(5)
const addTwo=function(number1){
  return number1 + 2;
}
//  This will give error because addTwo is not defined in global scope. It is defined in local scope of the function. and store in const variable
