//Asynchronous programming

// console.log("Start");
// setTimeout(function () {
//   console.log("Hello World");
// }, 300);
// console.log("End");
// *
// *
// *
// *
//Callback function..................................**
function loadscript(url, Callback) {
  var script = document.createElement("script");
  script.src = url;

  script.onload = function () {
    console.log("Script Loaded!" + url);
    Callback(null, url);
  };

  script.onerror = function () {
    console.log("Error loading script " + url);
    Callback(new Error("url got error"));
  };

  document.body.appendChild(script);
}

function hello(error, url) {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Hello World!" + url);
}

function goodmorning(url) {
  console.log("Good Morning!" + url);
}

loadscript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
  hello
);
