//  Build your own filter method with the help of prototypes

// Array.prototype.customFilter = function(callback) {
//     const filteredArray = [];
  
//     for (let i = 0; i < this.length; i++) {
//       if (callback(this[i], i, this)) {
//         filteredArray.push(this[i]);
//       }
//     }
  
//     return filteredArray;
//   };
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
  
//   const evenNumbers = numbers.customFilter(function(num) {
//     return num % 2 === 0;
//   });
  
//   console.log(evenNumbers); 

//   Build your own find method with the help of prototypes

Array.prototype.customFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  
    return undefined;
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
  
  const firstEvenNumber = numbers.customFind(function(num) {
    return num % 2 === 0;
  });
  
  console.log(firstEvenNumber); 
  
  