function calculateCircleArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    
    console.log(`The area of the circle with radius ${radius} is ${area}`);
    
    console.log(`Rounded to two decimal places: ${area.toFixed(2)}`);
  }
  
  const radius = 10;
  calculateCircleArea(radius);