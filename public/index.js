// const url = "http://162.243.173.140:8000";
const url = "http://localhost:8000";

function onClick() {
  const n = document.getElementById("input").value;
  document.getElementById("output").textContent = fibonacci(n);
}

// working function but commented out for reference :D
function onClick1() {
  var x = document.getElementById("max").value;
  var y = document.getElementById("min").value;

  const data = { high: x, low: y };

  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    // .then((response) => response.json())
    // .then((body) => console.log(body))
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

// function onClick1() {
//   //function in progress, integrating upper and lower bound first.

//   fetch(url)
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (text) {
//       document.getElementById("random").textContent = text;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("There is a issue with your fetch operation: ", error);
//     });

//   var num = document.getElementById("random").value;
//   console.log(num);
//   document.getElementById("output").textContent = fibonacci(num);
// }
