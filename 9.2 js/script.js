let targetNumber = Math.floor(Math.random() * 51);
console.log("wellcome");
let userGuess=null;

while (userGuess !== targetNumber) {
  userGuess = prompt("Guess a random number");
  userGuess = parseInt(userGuess);
  if (userGuess < targetNumber) {
    alert("Too low! Try again");
  } else if (userGuess > targetNumber) {
    alert("Too high! Try again");
  }
}

alert(" You guessed the correct number");