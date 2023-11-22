const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      hair: "Blond",
      planet: {
        name: "Tatooine",
        population: "200000"
      }
    },
]
  console.log(characters);
  
  function displayDataInDOM() {
    
    const container = document.createElement('div');
  
    characters.forEach(character => {
      const characterDiv = document.createElement('div');
  
      characterDiv.textContent = `Name: ${character.name}, Height: ${character.height}, Hair: ${character.hair}, Planet: ${character.planet.name}, Population: ${character.planet.population}`;
  
      container.appendChild(characterDiv);
    });
  
    document.body.appendChild(container);
  }
  
  displayDataInDOM();