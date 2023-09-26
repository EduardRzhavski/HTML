function isString(input, callback) {
  console.log(callback)
    if (typeof input === 'string') {
      callback(input);
    } else {
      console.log('Input is not a string');
    }
  }
  
  function logString(str) {
    console.log(str);
  }
  
  isString("Hello!", logString);
  isString(50, logString);
  
// 
  
function firstWordUpperCase(input, callback) {
    if (typeof input === 'string') {
      const words = input.split(' ');
      if (words.length > 0) {
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        const modifiedString = words.join('-');
        callback(modifiedString);
      } else {
        console.log('Input string is empty');
      }
    } else {
      console.log('Input is not a string');
    }
  }
  
  function createDashes(str) {
    console.log(str);
  }
  
//   const sentence = "this is a sentence";
//   firstWordUpperCase(sentence, createDashes); 

// 

function createDashesAndLog(str) {
    console.log("Modified String:", str);
  }
  
  const sentence = "this is a sentence";
  firstWordUpperCase(sentence, createDashesAndLog);
  
//

function calculate(num1, num2, callback) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof callback === 'function') {
      const result = callback(num1, num2);
      console.log("Result:", result);
    } else {
      console.log("Invalid input or callback");
    }
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  calculate(8, 4, add);
  calculate(8, 4, multiply);
  


  