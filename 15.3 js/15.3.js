// function getSumOfEven(arr){
//     return arr[2] + arr[4] + arr[6] + arr[8] +
//     arr[10];
//     }
//     getSumOfEven([1,2,3,4,5,6,7,8,9,10]);


//     function getSumOfEven(arr) {
//         return arr[0] + arr[2] + arr[4] + arr[6] + arr[8];
//       }
      
//       const sum = getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//       console.log(sum); 

      
      function sumEvenCells(arr) {
        let sum = 0;
      
        for (let i = 1; i < arr.length; i += 2) {
          sum += arr[i];
        }
      
        return sum;
      }
      
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = sumEvenCells(array);
      console.log(result); 
      