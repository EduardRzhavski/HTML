function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const yearToCheck = 2100;
  
  if (isLeapYear(yearToCheck)) {
      console.log("It is indeed a leap year.");
    } else {
        console.log("This is not a leap year.");
    }
    