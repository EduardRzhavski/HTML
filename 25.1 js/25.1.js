// What is wrong with the code? explain in your own words

when getStrength is invoked inside the whoIsStronger function, this inside getStrength does not refer to the hero object.

// Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// you cannot change the 'hero' or the whoIsStronger function

const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
      if (this.health <= 5) {
        return this.power - 10;
      } else return this.power;
    }
  };
  
  function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength.call(hero) < myStrength) {
      return "I am stronger";
    } else return "You are stronger";
  }
  
  console.log(whoIsStronger(hero.getStrength));
  