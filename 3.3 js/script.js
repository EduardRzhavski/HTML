function percentageOfWorld1(population) {
    const worldPopulation = 7900; 
    const percentage = (population / worldPopulation) * 100;
    return percentage;
  }
  
  const chinaPopulation = 1441;
  const percentageChina = percentageOfWorld1(chinaPopulation);
  console.log(`China represents ${percentageChina.toFixed(1)}% of the world population.`);

// 

function percentageOfWorld1(population) {
    const percentage = (population / 7900) * 100;
    return percentage;
  }
  
  const chinaPopulation = 1441;
  const indiaPopulation = 1380;
  const usaPopulation = 331;
  
  const percentageChina = percentageOfWorld1(chinaPopulation);
  const percentageIndia = percentageOfWorld1(indiaPopulation);
  const percentageUSA = percentageOfWorld1(usaPopulation);
  
  console.log(`China represents ${percentageChina.toFixed(1)}% of the world population.`);
  console.log(`India represents ${percentageIndia.toFixed(1)}% of the world population.`);
  console.log(`USA represents ${percentageUSA.toFixed(1)}% of the world population.`);
  
// 



  const percentageOfWorld2 = function (population) {
    const percentage = (population / 7900) * 100;
    return percentage;
  };
  
  const chinaPopulation = 1441;
  const indiaPopulation = 1380;
  const usaPopulation = 331;
  
  const percentageChina = percentageOfWorld2(chinaPopulation);
  const percentageIndia = percentageOfWorld2(indiaPopulation);
  const percentageUSA = percentageOfWorld2(usaPopulation);
  
  console.log(`China represents ${percentageChina.toFixed(1)}% of the world population.`);
  console.log(`India represents ${percentageIndia.toFixed(1)}% of the world population.`);
  console.log(`USA represents ${percentageUSA.toFixed(1)}% of the world population.`);