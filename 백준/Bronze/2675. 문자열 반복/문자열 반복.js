const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +input[0];

for (let i = 1; i <= T; i++) {
  let result = "";
  const R = +input[i][0];
  const S = input[i].split(" ")[1];

  for (let j = 0; j < S.length; j++) {
    result += S[j].repeat(R);
  }
  console.log(result);
}
