//const { response } = require("express");
var url = "http://162.243.173.140:8080";

function onClick() {
  // recieve input from text box
  const n = document.getElementById("input").value;
  // use input into fibonacci(n)
  // output result of function to log
  document.getElementById("output").textContent = fibonacci(n);
}

function onClick1() {
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      document.getElementById("random").textContent = text;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There is a issue with your fetch operation: ", error);
    });
}
