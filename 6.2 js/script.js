const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1);
console.log(people);

// 

people.splice(3, 1);
console.log(people);

// 

people.unshift("Matt");
console.log(people);

// 

people.push("Eduard");
console.log(people);

// // 

const people = ["Matt", "Mary", "Devon", "Eduard"];
const copyWithoutMary = people.slice(2)
console.log(copyWithoutMary);

// 

const people = ["Greg", "Mary", "Devon", "James"];
const indexOfMary = people.indexOf("Mary");
console.log(indexOfMary);

// 

const people = ["Greg", "Mary", "Devon", "James"];
const indexOfFoo = people.indexOf("Foo");
console.log(indexOfFoo); // "Foo" is not found in the array

// 

let people = ["Greg", "Mary", "Devon", "James"];
const indexToRemove = people.indexOf("Devon");
if (indexToRemove !== -1) {
  people.splice(indexToRemove, 1);
people.splice(indexToRemove, 0, "Elizabeth", "Artie");
}
console.log(people);
