/*****************Day---3*************************/

// function in js.....................................**
/*
//declaration.........
function sum(a, b) {
  return a + b;
}
const sum1 = sum(5, 6);
console.log(sum1);

//Expression.........
const sum2 = function (a, b) {    //expression assign a function to a variable
  return a + b;
};
console.log(sum2);
console.log(sum2(1, 5));
*/

//Arrow function..............................**
/*
var mul = (num1,num2) => {
    return num1 * num2;
}
console.log("Multiplication of 4 and 7 is: " + mul(4,7)) ;

const a  = (a,b)=>{
    console.log(`${a}+ ${b}= ${a+b}`);
}
a(5,5);
*/

//IIFE [Immediately Invoked Function Expression]......................**
/*
(function () {
  console.log("IIFE");
})(); //here call the function

(function (a, b) {
  console.log(a + b); //parameters are passed while calling IIFE
})(4, 5);

(function () {
  const userData = {
    userName: "john",
    userAge: 20,
  };

  function getName() {
    console.log(userData.userName);
  }

  function getAge() {
    console.log(userData.userAge);
  }
  return getName, getAge;
})();
// console.log(user);
userData.getName();
*/
//Pure function..................................**
/*
//this is pure function
function calculate(num1, num2) {
  return num1 * num2;
}
console.log(calculate(4, 5));

//this is not a pure function
const discount = 25;
function caldis(price) {
  discount = discount - 5; //This show error
  return price - discount;
}
const result = caldis(100);
console.log(result);
*/

//Callback function................................**
/*
function sayHi() {
  return "Hi";
}
function greet(wish) {
  console.log(`${wish()}, welcome to javascript`);
}
greet(sayHi);

function first(Wel) {
  console.log(`${Wel()} in New York`);
}
function second() {
  return "welcome";
}
first(second);
*/

//Function return Function.........................**
/*
function greet(message) {
  return function (wishes) {
    console.log(`${wishes}, ${message} `);
  };
}
const greeting = greet("I hope you are doing well!");
greeting("Hello");

function first(msg){
    return function(msg2){
        console.log(`${msg}, ${msg2}`);
    }
}
const Hello = first("Hello");
Hello("World");
*/

//Higher order function..........................**
/*
let inputs = [2, 3, 4, 5, 6, 7];

function operation(inputs, fn) {
  //function pass as an arguments
  const output = [];
  for (let num of inputs) {
    output.push(fn(num));
  }
  return output;
}
function square(number) {
  return number * number;
}
function cube(number) {
  return number * number * number;
}
console.log(operation(inputs, cube)); //first pass the cube function
console.log(operation(inputs, square)); //second pass the square function
*/

//Currying in js...............................**
/*
function add1(a, b, c) {
  return a + b + c;
}
console.log(add1(2, 3, 4));

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(2)(3)(4));

//power .....
function power(b) {
  return function (e) {
    return e ** b;
  };
}
const square = power(2);
console.log(square(4));

const cube = power(3);
console.log(cube(2));
*/
//Print Table....
/*
function table(a){
    return function(x){
        for(let i=1; i<=10; i++){
            console.log(`${a} x ${i} = ${a*i}`);
        }
    }
}
const tabresult = table(2);
console.log(tabresult());
*/
