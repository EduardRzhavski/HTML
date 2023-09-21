function countLettersInArray(arr) {
    const letterCounts = {};
  
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i].toLowerCase(); 
  
      for (let j = 0; j < word.length; j++) {
        const letter = word[j];
  
        if (/[a-z]/.test(letter)) {
          if (letterCounts[letter]) {
            letterCounts[letter]++;
          } else {
            letterCounts[letter] = 1;
          }
        }
      }
    }
  
    return letterCounts;
  }
  
  const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
  const letterCounts = countLettersInArray(array);
  
  console.log(letterCounts);

