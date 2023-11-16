function testNumber(value) {
    return new Promise((resolve, reject) => {
      if (value > 10) {
        resolve(`${value} is greater than 10.`);
      } else {
        reject(`${value} is less than 10.`);
      }
    });
  }
  
  testNumber(15)
    .then((result) => {
      console.log('Resolve:', result);
    })
    .catch((error) => {
      console.error('Reject:', error);
    });
  
  testNumber(5)
    .then((result) => {
      console.log('Resolve:', result);
    })
    .catch((error) => {
      console.error('Reject:', error);
    });
  