function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
  }
   
  const country = "Spain";
  const population = 47;
  const capitalCity = "Madrid";
  
  const info = countryInfo(country, population, capitalCity);
  console.log(info);