// function calcAverage (arr){
//     var sum ;
//     for ( var i = 0 ; i < arr .length; i ++ ){
//     sum += arr [ i ];
//     } return sum ;
//     }
//     calcAverage ([ 85 , 90 , 92 ]);


function calcAverage(arr) {
    var sum = 0;
  
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum / arr.length;
  }
  
  const average = calcAverage([85, 90, 92]);
  console.log(average);
  