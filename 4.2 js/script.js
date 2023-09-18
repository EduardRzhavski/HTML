let grade = prompt('Enter your grade:');

grade = grade.toUpperCase();

let scoreMessage;

switch (grade) {
  case 'A': scoreMessage = '90-100 is an "A"';break;
  case 'B':scoreMessage = '80-89 is a "B"';break;
  case 'C':scoreMessage = '70-79 is a "C"';break;
  case 'D':scoreMessage = '65-69 is a "D"';break;
  case 'F':scoreMessage = '0-64 is an "F"';break;
 default: scoreMessage = 'invalid grade';
}
console.log(`Your grade "${grade}" corresponds to a ${scoreMessage}.`);






let grade = prompt('Enter your grade:');

grade = grade.toUpperCase();

let scoreMessage;

switch (grade) {
  case 'A':scoreMessage = '90-100 is an "A"';break;
  case 'B':scoreMessage = '80-89 is a "B"';break;
  case 'C':scoreMessage = '70-79 is a "C"';break;
  case 'D':scoreMessage = '65-69 is a "D"';break;
  case 'F':scoreMessage = '0-64 is an "F"';break;
  default:scoreMessage = 'invalid grade';
}
console.log(`Your grade "${grade}" corresponds to a ${scoreMessage}.`);