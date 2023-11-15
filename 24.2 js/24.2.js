function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
  }
  
  Pokemon.prototype.callPokemon = function() {
    console.log("I choose you, " + this.name);
  };
  
  Pokemon.prototype.attack = function(attackNumber) {
    if (attackNumber >= 0 && attackNumber < this.attackList.length) {
      console.log(this.name + " used " + this.attackList[attackNumber]);
    } else {
      console.log("Invalid attack number");
    }
  };
  
  let pikachu = new Pokemon("Pikachu", "Electric", ["Thunderbolt", "Quick Attack", "Thunder Wave"]);
  let charmander = new Pokemon("Charmander", "Fire", ["Ember", "Scratch", "Growl"]);
  let squirtle = new Pokemon("Squirtle", "Water", ["Water Gun", "Tackle", "Tail Whip"]);
  
  pikachu.callPokemon();
  pikachu.attack(1);
  
  charmander.callPokemon();
  charmander.attack(0);
  
  squirtle.callPokemon();
  squirtle.attack(2);
  