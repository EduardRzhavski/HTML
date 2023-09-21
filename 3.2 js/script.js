// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
//     }

(function () {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  console.log(welcome);
})();

//   function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
//     }

const power = function (a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// const squareRoot = a => Math.sqrt(a);

const number = 16; 

const squareRoot = (function (a) {
  return Math.sqrt(a);
})(number);

console.log(squareRoot);

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;


const randomNumbers = ((a, b) => {
  return Math.random() * (a - b) + b;
})
console.log(randomNumbers);
