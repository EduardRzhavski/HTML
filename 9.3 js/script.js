const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function arraysHaveSameValues(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      return false; 
    }
  }

  return true; 
}

const result = arraysHaveSameValues(food1, food2);
console.log(result);
