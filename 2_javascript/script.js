//Promises............................**

console.log("Hello");
setTimeout(function () {
  console.log("Hello");
}, 3000);

console.log("My name is bharat ");

let promise = new Promise(function (resolve, reject) {
  console.log("hello p");
  resolve(56);
});

console.log(promise);
