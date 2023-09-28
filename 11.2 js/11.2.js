// 1
// function doubleValues(arr) {
//     return arr.map((value) => value * 2);
//   }
  
//   const inputArray = [1, 2, 3, 4];
//   const doubledArray = doubleValues(inputArray);
//   console.log(doubledArray); 

//2   

// function onlyEvenValues(arr) {
//     const evenValuesArray = [];
  
//     arr.forEach((value) => {
//       if (value % 2 === 0) {
//         evenValuesArray.push(value);
//       }
//     });
  
//     return evenValuesArray;
//   }
  
//   const inputArray = [1, 2, 3, 4];
//   const evenValuesArray = onlyEvenValues(inputArray);
//   console.log(evenValuesArray);

  //3   

//   function showFirstAndLast(arr) {
//     const resultArray = [];
  
//     arr.forEach((element, index) => {
//       if (typeof element === 'string' && (index === 0 || index === arr.length - 1)) {
//         resultArray.push(element);
//       }
//     });
  
//     return resultArray;
//   }
  
//   const inputArray = ['Apple', 'Hi', 'Eduard', '2000'];
//   const filteredArray = showFirstAndLast(inputArray);
//   console.log(filteredArray); 
  
//4

// function vowelCount(str) {
//     const vowels = 'aeiou'; 
//     const vowelCounts = {};
  
//     str = str.toLowerCase();
  
//     str.split('').forEach((char) => {
//       if (vowels.includes(char)) {
//         if (vowelCounts[char]) {
//           vowelCounts[char]++;
//         } else {
//           vowelCounts[char] = 1;
//         }
//       }
//     });
  
//     return vowelCounts;
//   }
  
//   const inputString = 'Hi Eduard!';
//   const result = vowelCount(inputString);
//   console.log(result); 

//5

// function capitalize(str) {
//     const capitalizedArray = str.split('').map((char) => char.toUpperCase());
//     return capitalizedArray.join('');
//   }
  
//   const inputString = 'hi eduard';
//   const capitalizedString = capitalize(inputString);
//   console.log(capitalizedString);
  
//6

// function shiftLetters(str) {
//     return str.split('').map((char) => {
//       if (/[a-zA-Z]/.test(char)) {
//         const isUpperCase = char === char.toUpperCase();
//         const offset = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
//         const shiftedCharCode = (char.charCodeAt(0) - offset - 1 + 26) % 26 + offset;
//         return String.fromCharCode(shiftedCharCode);
//       } else {
//         return char;
//       }
//     }).join('');
//   }
  
//   const inputString = 'Hi Eduard';
//   const encodedString = shiftLetters(inputString);
//   console.log(encodedString);

//7   
  
function swapCase(str) {
    const words = str.split(' ');
  
    const swappedWords = words.map((word, index) => {
      if (index % 2 === 1) {
        return word.toUpperCase();
      } else {
        return word;
      }
    });
  
    return swappedWords.join(' ');
  }
  
  const inputString = 'Hi Eduard';
  const swappedString = swapCase(inputString);
  console.log(swappedString); 
  