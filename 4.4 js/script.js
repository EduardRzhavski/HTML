function printNumbersWithConditions(n) {
    for (let i = 1; i <= 20; i++) {
      if (i % 7 === 0 || i.toString().includes("7")) {
        if (i % 7 === 0 && i.toString().includes("7")) {
          console.log("BOOM-BOOM");
        } else {
          console.log("BOOM");
        }
      } else {
        console.log(i);
      }
    }
  }
  
  printNumbersWithConditions(20);