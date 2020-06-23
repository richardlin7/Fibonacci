function fibcount(n) {
  var fib = []; // Initialize array!
  fib[0] = 0;
  fib[1] = 1;
  var c = 0; //answer

  for (var i = 2; ; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    if (b >= n) {
      break;
    }
    var b = (fib[i] = fib[i - 2] + fib[i - 1]);
    console.log(fib[i]);
    c++;
  }
  console.log("the nth number is or is in between...");
  return c;
}
