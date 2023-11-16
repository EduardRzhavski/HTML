function testNumber(value) {
    return new Promise((resolve, reject) => {
      if (value > 20) {
        resolve(`${value} is greater than 20.`);
      } else {
        reject(`${value} is less than 20.`);
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
  
  testNumber(8)
    .then((result) => {
      console.log('Resolve:', result);
    })
    .catch((error) => {
      console.error('Reject:', error);
    });
  
    testNumber(30)
    .then((result) => {
      console.log('Resolve:', result);
    })
    .catch((error) => {
      console.error('Reject:', error);
    });