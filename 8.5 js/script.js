function swapPropertiesAndValues(obj) {
    const swappedObj = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        swappedObj[obj[key]] = key;
      }
    }
  
    return swappedObj;
  }
  
  const originalObj = {
    name: "Eduard",
    age: 36,
    city: "Haifa"
  };
  
  const swappedObj = swapPropertiesAndValues(originalObj);
  
  console.log(swappedObj);