function findMax(numbers) {
    if (numbers.length === 0) {
      throw new Error("");
    }
  
    return numbers.reduce(function (max, current) {
      return Math.max(max, current);
    });
  }

//   

function sumOfEvenNumbers(numbers) {
    return numbers.reduce(function (sum, current) {
      if (current % 2 === 0) {
        return sum + current;
      } else {
        return sum;
      }
    }, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const result = sumOfEvenNumbers(numbers);
  console.log(result); 

// 

function calculateAverage(numbers) {
    if (numbers.length === 0) {
      throw new Error("");
    }
  
    const sum = numbers.reduce(function (accumulator, current) {
      return accumulator + current;
    }, 0);
  
    return sum / numbers.length;
  }
  
  const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average);
