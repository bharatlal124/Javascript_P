/*****************Day---8*************************/

//JavaScript  Callback....................................**

//A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished
/*
function myFirst() {
  console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}

myFirst();
mySecond();
*/
/*
function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5,5);
console.log(result);
*/
/*
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

myCalculator(5,5);
// console.log(result);
*/
//Callback function.......

/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
*/

/*
const mynumber = [4, 1, 5, -20, -7, 5, 9, -6];

const postnumber = removeneg(mynumber, (x) => x >= 0);

console.log(postnumber);

function removeneg(number, callback) {
  const myArray = [];
  for (const x of number) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
*/

//Asynchronous javascript...................................**

//Functions running in parallel with other functions are called asynchronous
//A good example is JavaScript setTimeout()

//Waiting for a Timeout.....
/*
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("Hello World");
}
*/

//Waiting for Intervals..................
/*
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("div").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
*/

//Javascript Promises........................

//"Producing code" is code that can take some time
//"Consuming code" is code that must wait for the result
//A Promise is a JavaScript object that links producing code and consuming code

/*
let myPromise = new Promise(function (myResolve, myReject) {
  //"Producing Code" (Make take some time)
  myResolve(); //When Successful
  myReject(); //When error
});

//"Consuming Code" (Must wait for a fulfilled Promise)

myPromise.then(
  function (value) {
    console.log("Hello");
  },
  function (error) {
    console.log("error found");
  }
);
*/

/*
function Result(some) {
  document.getElementById("div").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;
  //Producing Code

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    Result(value);
  },
  function (error) {
    Result(error);
  }
);
*/

//Promise Example using Timeout................
/*
let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("Hello World");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("div").innerHTML = value;
});
*/

//Waiting for a file.....................
/*
let myPromise = new Promise(function (myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.htm");
  req.onload = function () {
    if (req.status === 200) {
      myResolve(req.response);
    } else {
      myReject("File not found");
    }
  };
  req.send();
});

myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
*/

//Javascript Async / Await.........................

//"async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise

//syntax:-
/*
async function myFunction() {
  return "Hello";
}
const res = myFunction();
console.log(res);

function myFunction2() {
  return Promise.resolve("Wrold");
}
const res2 = myFunction2();
console.log(res2);
*/

/*
async function myFunction() {
  return "Hello";
}

myFunction().then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
*/

// Await Syntax..........
/*
async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("Hello World");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

const res = myDisplay();
console.log(res);
*/
