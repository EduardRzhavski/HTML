// function findSmallest(a, b, c){
//     if (a > b > c){
//     return c;
//     } else if (a > c > b) {
//     return a;
//     } else {
//     return b;
//     }
//     }
//     findSmalest(52,66, 2);

    function findSmallest(a, b, c) {
        if (a < b && a < c) {
          return a;
        } else if (b < a && b < c) {
          return b;
        } else {
          return c;
        }
      }
      
      const smallest = findSmallest(52, 66, 2);
      console.log(smallest); 
      