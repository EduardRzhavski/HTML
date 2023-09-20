const mycountry = {
    country: "Germany",
    capital: "Berlin",
    language: "German",
    population: 84432670,
    neighbours: ["Austria", "Netherlands", "Belgium"],
    describe: function() {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
      }
    };
    
  mycountry.describe();

//   


const mycountry = {
    country: "Germany",
    capital: "Berlin",
    language: "German",
    population: 84432670,
    neighbours: ["Austria", "Netherlands", "Belgium"],
    describe: function() {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function() {
      this.isIsland = this.neighbours.length === 0 ? true : false;
    }
  };
  
  mycountry.checkIsland();
  
  console.log(`Is ${mycountry.country} an island? ${mycountry.isIsland}`);