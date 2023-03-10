const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim()
  .split("\n");

const score = input[1].split(" ");
const maxScore = Math.max(...score);
let sum = 0;

for (let i = 0; i < score.length; i++) {
  sum += (score[i] / maxScore) * 100;
}

console.log(sum / score.length);
