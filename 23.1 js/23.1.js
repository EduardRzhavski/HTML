// 1- In your own words what will this point to and why?
// (Note this is the global scope)
// console.log(this);

console.log(this) in the global scope in a JavaScript will log the window object to the console.

// 2- a. In your own words what will this point to and why?
// b. How can you fix this code?
// const myObj = {
// name: "Timmy",
// greet: () => {
// console.log(`Hello ${this.name}`);
// },
// };
// myObj.greet();

a. this inside the greet method is pointing to the global object because arrow functions dont have their own this context.

b. const myObj = {
    name: "Timmy",
    greet: function() {
      console.log(`Hello ${this.name}`);
    },
  };
  
  myObj.greet();

//   3- In your own words what will this point to and why?
// const myFuncDec = function () {
//     console.log(this);
//     };

The this keyword in a regular function refers to the object that called the function.

// 4- In your own words what will this point to and why?
// const myFuncArrow = () => {
//     console.log(this);
//     };
//     myFuncArrow();

this will refer to the this value of the surrounding scope

// 5- a. In your own words, what will this point to and why?
// b. How can you fix this code?
// document.querySelector(".element").addEventListener(() => {
// console.log(this);
// });

a.  this will refer to the this value of the surrounding scope where the arrow function is defined

b. document.querySelector(".element").addEventListener(function() {
    console.log(this); 
  });