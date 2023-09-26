// function countOccurrences (str, char){
//     let counter = 0 ;
//     for ( let i = 0 ; i < str .length; i ++ ){
//     if ( str . charAt ( i ) === char ){
//     counter + 1 ;
//     }
//     } return counter ;
//     }
//     countOccurrences ( "ini mini miny moe" , "n" );

//     console.log(occurrences);


    function countOccurrences(str, char) {
        let counter = 0;
      
        for (let i = 0; i < str.length; i++) {
          if (str.charAt(i) === char) {
            counter += 1;
          }
        }
      
        return counter;
      }
      
      const occurrences = countOccurrences("ini mini miny moe", "n");
      console.log(occurrences); 
      