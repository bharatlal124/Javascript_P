/*****************Day---6*************************/

//Object Destructuring...................................**
//Unpack more than one property
const obj = {
  a: 1,
  b: 2,
  c: ["o", "b", "j"],
  d: { value: "val" },
};

// This object destructuring is done by Binding Pattern :)
/*
// const a = obj.a;
const { a,c} = obj;      //this object is destructure
console.log(a); //1
console.log(c);

//another type:
const {a:a1} = obj;
console.log(a1)   //1
console.log(a1)   //1
*/
/*
const student = {
    name : "bharat",
    position : "first",
    rollno : "25",
}

const{name, position, rollno} = student;
console.log(`My Name Is ${name}`);
console.log(`My position Is ${position}`);
console.log(`My rollno Is ${rollno}`);
*/

//By Assignment Pattern:
// let b;
// ({b : b}) = obj;
// console.log(b);

//Array Destructing..............................**
//In array destructing using '[]' square bracket

const fruit = ["apple", "mango", 34, "kiwi", "orange", "berrry", "banana"];

//BY Binding Pattern:

// const [a,m] = fruit;
// console.log(a,m);

// const[a, ,n, k, o] = fruit;
// console.log(a,n,k,o );

// const[a,m,...f] = fruit;
// console.log(f);

// const [a, m, ...[, be, ba]] = fruit;
// console.log(be, ba);

// const [a, m, n,...[, ,be,ba]] = fruit;
// console.log(be,ba);                //berry banana

//ES6 Classes.....................................**

// Classes in JS.....................................**

/*
first -> create an object
second -> Bind "this" to obj     => constructor function
third -> Return obj 
*/

// Class in js.........
/*
class Vehicle {
  name; //properties
  color; //properties
  wheels; //properties

  constructor(name, color, wheels) {
    //constructor function
    this.name = name; //binding the value of name with this.name
    this.color = color; //binding the value of color with this.color
    this.wheels = wheels; //binding the value of wheels with this.wheels
  }

  getDetails() {
    //Methods
    console.log(
      `the ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`
    );
  }
}

const veh1 = new Vehicle("Scooter", "Grey", "2"); //Object creation part
console.log(veh1);
//In this class is not hoisted
*/

//Encapsulation....................................**
//Here we use setter method to write data and getter method to read data
/*
class student {
  constructor() {
    var name;
    var marks;
  }

  getname() {          //get method 
    return this.name;
  }

  setname(name) {      //set method
    this.name = name;
  }

  getmarks() {          
    return this.marks;
  }

  setmarks(marks) {
    this.marks = marks;
  }
}
var stu = new student();
stu.setname("John Doe");
stu.setmarks(80);
console.log(stu.getname() + " " + stu.getmarks());
*/

//Inheritance.......................................**
/*
class Bike{
    constructor(){
        this.company = "Honda";
    }
}

class Vehicle extends Bike {
    constructor(name, price){
        super();         //super keyword used to call the parent constructor
        this.name = name;
        this.price = price;
    }
}

var v = new Vehicle("City" , "700000");
console.log(v.company+ " " + v.name+ " " + v.price);

*/
/*

function Bike(company) {
  this.company = company;
}
Bike.prototype.getCompany = function () {
  return this.company;
};

//Annother Constructor function
function Vehicle(name, price) {
  this.name = name;
  this.price = price;
}

var bike = new Bike("Honda");
Vehicle.prototype = bike; //Setting up inheritance by setting prototype of vehicle as an instance of Bike

var vehicle = new Vehicle("Shine", 700000);
console.log(vehicle.getCompany() + " " + vehicle.name + " " + vehicle.price);
*/

//Inheritance in constructor function
/*
function car(color , brand, seats){
    vehicle.call(this, "car" , "blue", "4");
    this.brand = brand;
    this.seats = seats;
}


const car1 = new car("Black", "Audi" , "2");
car1.getdetails();
//=>
car.prototype = object.create(vehicle.prototype);
console.log(car1.__proto__);
*/

//Static Keyword.............................**
/*
class vehicle{
    static showMsg(){
        console.log("This is the static method");
    }
}
vehicle.showMsg();

//Static Properties ..............................**
vName = "Static Name";
console.log(vehicle.vName);
*/

//Built - in class in js

//1. Date :-
const today = new Date();
console.log(`Today's date is ${today}`);

const birthDate = new Date("1999-06-12");
console.log(birthDate);

//This show all date and time
const someDay = new Date("1990,07");
console.log(someDay);

//It's gives only year
console.log(birthDate.getFullYear());

//It's gives full date not time
console.log(birthDate.toDateString());
