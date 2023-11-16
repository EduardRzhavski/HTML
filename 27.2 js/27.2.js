function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      const capitalizedWords = words.map((word) => {
        if (typeof word === 'string') {
          return word.toUpperCase();
        } else {
          reject('Error: Array contains non-string elements.');
        }
      });
  
      resolve(capitalizedWords);
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(words) && words.every((word) => typeof word === 'string')) {
        resolve(words.sort());
      } else {
        reject('Error: Array contains non-string elements.');
      }
    });
  }
  
  // valid array
  const validWords = ['apple', 'orange', 'banana'];
  
  makeAllCaps(validWords)
    .then((capitalizedWords) => sortWords(capitalizedWords))
    .then((sortedWords) => {
      console.log('Resolve:', sortedWords);
    })
    .catch((error) => {
      console.error('Reject:', error);
    });
  
  // non-string element
  const invalidWords = ['apple', 'orange', 50];
  
  makeAllCaps(invalidWords)
    .then((capitalizedWords) => sortWords(capitalizedWords))
    .then((sortedWords) => {
      console.log('Resolve:', sortedWords);
    })
    .catch((error) => {
      console.error('Reject:', error);
    });
  