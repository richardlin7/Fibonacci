//const { response } = require("express");

function onClick() {
  // recieve input from text box
  const n = document.getElementById("input").value;
  // use input into fibonacci(n)
  // output result of function to log
  document.getElementById("output").textContent = fibonacci(n);
}

function onClick1() {
  fetch("http://162.243.173.140:4000")
    .then((response) => {
      return random();
    })
    .then((users) => {
      console.log(users);
    });

  document.getElementById("output").textContent = 0;
}
