function onClick() {
  // recieve input from text box
  const n = document.getElementById("input").value;
  // use input into fibonacci(n)
  // output result of function to log
  document.getElementById("output").textContent = fibonacci(n);
}
