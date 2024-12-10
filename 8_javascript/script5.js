/*****************Day---5*************************/

//OOPS in js

//Object Literals..................................**
/*
const movie = {
  title: "The Avenger",
  year: 2012,
  genere: "Action, Sci-fi, Thriler",
  cast: ["Robert Downey Jr.", "Chris Event"],
  getDetalis: function () {
    console.log(`Title: ${movie.title}
        year: ${movie.year}
        genere: ${movie.genere}
        cast: ${movie.cast}`);
  },

  getmovieDetails: function (details) {
    console.log(`${details}: ${movie[details]}`); //Bracket Notation...
  },
};
// console.log(movie.title);
// movie.getDetalis();

// getmovieDetails : function(details){
//     console.log(`${details}: ${movie[details]}`);
// }
// const details = "year";
// const print = movie.getmovieDetails(details); // Output -> 2012
// console.log(print);
*/
//'This' of Object..................................**
/*
const movie = {
  title: "The Avenger",
  year: 2012,
  genere: "Action, Sci-fi, Thriler",
  cast: ["Robert Downey Jr.", "Chris Event"],
  getDetalis: function () {
    console.log(`Title: ${this.title}
          year: ${this.year}
          genere: ${this.genere}
          cast: ${this.cast}`);
  },

  getmovieDetails: function (details) {
    console.log(`${details}: ${movie[details]}`); //Bracket Notation...
  },
};
movie.getDetalis();
*/

//Constructor function............................**
/*
function Movie(title, year) {
  const movieobj = {
    title: title,
    year: year,
    getDetalis() {
      console.log(`Title : ${this.title}
            Year : ${this.year}`);
    },
  };
  return movieobj;
}
const movie1 = Movie("the Avenger", 2012);
console.log(movie1);

movie1.getDetalis();

const movie2 = Movie("Avtar", 2018);
console.log(movie2);
movie2.getDetalis();

function city(name, population) {
  const cityobj = {
    name: name,
    population: population,
    getDetalis() {
      console.log(`Name : ${this.name}  Population : ${this.population}`);
    },
  };
  return cityobj;
}
const city1 = city("Bombay", 2022020);
console.log(city1);

const city2 = city("Kolkata", 86373);
console.log(city2);
*/

//constructor function start with the capital letter name
/*
function Movie(title, year){
    this.title=title;
    this.year=year;

    this.getDetails = function(){
        console.log(`Movie Title : ${this.title}, Movie Year : ${this.year}`);
    }
}
const movie1 = new Movie("Avatar", 2013);
console.log(movie1);
movie1.getDetails();
*/
/*
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  this.ChangeName = function (name) {
    this.lastName = name;
  };
}
const person1 = new Person("Bharat", "lal", 25, "Blue");
console.log(person1);
person1.ChangeName("Sharma");
*/

//Prototype ......................................**

//prototype itself is object
/*
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  this.ChangeName = function (name) {
    this.lastName = name;
  };
}
const person1 = new Person("Bharat", "lal", 25, "Blue");
Person.prototype.nationality = "English";
Person.prototype.name = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

console.log(person1);
//   person1.ChangeName("Sharma");
*/

// const inputs = [1,2,3,4,5];
// console.log(inputs.__proto__.__proto__);

//Object.create........................................**

//No method or property will be copy, prototype is linked
/*
const car = {
  getDetails(name) {
    console.log(`Your car is ${name}`);
  },
};
const car1 = Object.create(car);
// console.log(car1);
car1.getDetails("Maruti");
// console.log(car1);

console.log(car1.__proto__);
*/
/*
//Methid of creating object
1. object Literals
2. constructor function
3. Object.create

*/

//Call / Apply / Bind Methods..............................>**

//Call() Method.........................**

/*
//With th call method we have to write a method that can be used on different objects
const car = {
  name: "car",
  color: "Blue",
  getDetails(brand, seats, color) {
    console.log(
      `This is a ${brand} and it's color is ${color} and has ${seats} Seats`
    );
  },
};
const bus = {
  name: "Bus",
  color: "White",
};
car.getDetails("Audi", 2, "Red");
car.getDetails.call(bus, "Bus", 50, "Black");

//Apply() Method...........................**
//The apply() method calls a method with an array-like object as the argument list.

car.getDetails.apply(bus, ["Gold", 30, "Blue"]); //pass as array

//Bind() Methods..................................**

//With the bind() method, an object can borrow a method from another object.

const veh1 = car.getDetails.bind(bus);
veh1("Mercedes", 4, "Yellow");
veh1("Bronze", 4);
*/
