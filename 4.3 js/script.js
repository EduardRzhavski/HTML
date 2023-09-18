const JohnScores = [89, 120, 103];

const MikeScores = [116, 94, 123];

function calculateAverage(scores) {
  const sum = scores.reduce((total+score), 0);
  return sum / scores.length;
}

const averageScoreJohn = calculateAverage(JohnScores);
const averageScoreMike = calculateAverage(MikeScores);

console.log(`John's team average score: ${averageScoreJohn}`);
console.log(`Mike's team average score: ${averageScoreMike}`);

let winner;
if (averageScoreJohn > averageScoreMike) {
  winner = "John's team";
} else if (averageScoreMike > averageScoreJohn) {
  winner = "Mike's team";
} else {
  winner = "It's a draw";
}

console.log(`Average score for John's team: ${averageScoreJohn}`);
console.log(`Average score for Mike's team: ${averageScoreMike}`);
console.log(`The winner is: ${winner}`);

