// const min = 0;
// const max = 50;
// const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// let numberOfGuesses = 0;

// console.log(`I'm thinking of a number between ${min} and ${max}.`);

// while (true) {
//   const userGuess = parseInt(prompt(`Enter your guess (${min}-${max}):`));

//   if (isNaN(userGuess) || userGuess < min || userGuess > max) {
//     console.log(`Please enter a valid number between ${min} and ${max}.`);
//     continue; 
//   }

//   numberOfGuesses++;

//   if (userGuess === randomNumber) {
//     alert(`Congratulations! Your guess is correct`);
//     break; 
//   } else if (userGuess < randomNumber) {
//     console.log("Too low! Try again.");
//   } else {
//     console.log("Too high! Try again.");
//   }
// }





// const randomNumber = Math.floor(Math.random() * 51);
// console.log(randomNumber);
// let promptVar = prompt("please guess a number between 0 and 50");
// while (promptVar !== randomNumber) {
// if (promptVar > randomNumber) {
//   console.log("guess is too high, try again");
//   promptVar = prompt("please guess again");
//  } else {
//     console.log("guess is too low, try again");
//     promptVar = prompt("please guess again");
//  }  
// }
// console.log("Congratulations! You guessed the correct number.");



const targetNumber = Math.floor(Math.random() * 51); 
let guessed = false;

while (!guessed) {
  const userGuess = parseInt(prompt('Enter your guess (between 0 50)'), 10);

  if (isNaN(userGuess)) {
    console.log(' enter a number');
  } else if (userGuess === targetNumber) {
    alert(' You guessed the correct number');
    guessed = true;
  } else if (userGuess < targetNumber) {
    console.log('Too low! Try again');
  } else {
    console.log('Too high! Try again');
  }
}