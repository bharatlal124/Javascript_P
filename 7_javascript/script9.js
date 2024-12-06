/*****************Day---9*************************/

/*
const divEle = document.querySelector(".card-container");

const req = new XMLHttpRequest();

req.open("GET", `https://dummyjson.com/users/1`);
req.send();

req.addEventListener("load", function () {
  // console.log(responseText);
  console.log(JSON.parse(this.responseText));
});
*/
/*
const divEle = document.querySelector(".card-container");

function getDetails(id) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://dummyjson.com/users/${id}`);
  request.send();

  request.addEventListener("load", function () {
    //console.log(this.responseText);
    //console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    console.log(data);
    displayUser(data, "beforeend");

    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
    request2.send();
    request2.addEventListener("load", function () {
      //console.log(this.responseText);
      //console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText);
      console.log(data);
      displayUser(data, "afterbegin", "other");
    });
  });
}

function displayUser(data, pos, className = "") {
  const card = `<div class="user-card ${className}">
    <img src=${data.image} alt="Profile Image" />
        <h3>${data.firstName}</h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
        </div>`;

  divEle.insertAdjacentHTML(pos, card);
}

getDetails(2);
*/

/*
const divEle = document.querySelector(".card-container");

function getDetails(id) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://dummyjson.com/users/${id}`);
  request.send();

  request.addEventListener("load", function () {
    if (request.status === 404) return;
    //console.log(this.responseText);
    //console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    console.log(data);
    displayUser(data, "beforeend");

    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
    request2.send();
    request2.addEventListener("load", function () {
      if (request2.status === 404) return;
      const data = JSON.parse(this.responseText);
      console.log(data);
      displayUser(data, "afterbegin", "other");
    });
  });
}

function displayUser(data, pos, className = "") {
  const card = `<div class="user-card ${className}">
    <img src=${data.image} alt="Profile Image" />
        <h3>${data.firstName}</h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
        </div>`;

  divEle.insertAdjacentHTML(pos, card);
}

getDetails(1);
*/

//Promise................
const divEle = document.querySelector(".card-container");

function getDetails(id) {
  //   const request = fetch(`https://dummyjson.com/users/${id}`);
  //   //console.log(request);

  //   const response = request.then((response) => {
  //     return response.json();
  //   });

  //   response.then((user) => console.log(user));

  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((user) => console.log(user));
}

getDetails(1);
