//Promises in javascript...........................**

/*
let p = new Promise((resolve, reject) => {
  console.log("promise is pending");

  setTimeout(() => {
    // console.log("I am a promise");
    resolve(true);
    // reject(new Error("I am a error"));
  }, 5000);
});

let p1 = new Promise((resolve, reject) => {
  console.log("promise is pending");

  setTimeout(() => {
    // console.log("I am a promise");
    // resolve(true);
    reject(new Error("I am a error"));
  }, 5000);
});

//To get the value
p.then(
  (value) => {
    console.log(`p The value of the promise is ${value}`);
  },
  (error) => {
    console.log(`p There was an error:${error}`);
  }
);

//To catch the error
p1.catch((error) => {
  console.log(`Caught an errorin p1: ${error.message}`);
});
// console.log(p);
// console.log(p1);

*/

//Promises .then() chaining......................**
/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved aftyer 2s");
  }, 2000);
}).then((value) => {
  console.log(value);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 2000);
})
  .then((value) => {
    console.log("we are done");
  })
  .then((value) => {
    console.log("Done finally");
  });
*/

const loadscript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("script loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

// let p1 = loadscript("https://www.google.com");
p1 = loadscript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
);
p1.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log("sorry");
});
