let numOfSiblings = prompt('How many siblings do you have?');
numOfSiblings = parseInt(numOfSiblings);

let numSiblings = prompt('How many siblings do you have?');
numSiblings = parseInt(numSiblings);

if (numSiblings == 1) {
  console.log('1 sibling!');
}

if (numSiblings == 1) {
  console.log('1 sibling!');
} else if (numSiblings > 1) {
  console.log('More than 1 sibling');
}
else {
    console.log('No siblings');
  }

//  code will not log "1 sibling!" because strict equality (===) checks for both value and data type.

//  converting numSiblings to a number, it will behave correctly when you input 1.0 (as a string), and it will still log "1 sibling!"

