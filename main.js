const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What's the number?", (num) => {
  console.log(fibonacci(num));
  readline.close();
});

function fibonacci(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
