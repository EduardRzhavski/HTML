const language = prompt('What is your preferred language?');
const isIsland = prompt('Is the country an island? (true/false)') === 'true';
const population = parseInt(prompt('What is the population of the country?'));
const country = prompt('Enter the name of the country:');

if (language === 'English' & !isIsland & population < 50000000) {
    console.log(`Sarah can live in ${country}.`);
  } else {
    console.log(`Sarah cannot live in ${country}.`);
  }

  const SarahCriteria = {language: 'English',isIsland: false,population: 50000000
  };
  
  if (
    language === SarahCriteria.language &
    isIsland === SarahCriteria.isIsland &
    population < SarahCriteria.population) 
    {
    console.log(`You should live in ${country}.`);
  } else {
    console.log(`${country} does not meet your criteria.`);
  }



else {
    isIsland = false; 
    population = 40000000;
}