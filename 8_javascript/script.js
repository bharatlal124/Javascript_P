// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE * 10);
// console.log(12 / 10);
// console.log(188 / Infinity);

//Type Coercion...................................**
/*
console.log("5" + 5);
let fullName = "bharat" + " " + "lal";
console.log(fullName);

let sub = "55" - 10;
console.log(sub);

console.log('4' * 2);
*/

//Type Conversion...............................**
/*
console.log(String(100));
console.log(parseInt("100"));
console.log((123).toString());
console.log(Number(true));
console.log(Number("55")); //change into number
let num = 1.2;
console.log(parseFloat('123.45f'));
console.log(parseInt('123.45f'));
console.log(Boolean(''));
console.log(Boolean(undefined));
*/

//IF ELSE.....................................**
/*
let num = 44;
if(num < 10){
    console.log("less than 10");
} else{
    console.log("Greater than 10");
}
*/

//EMAIL VERIFICATION using IF_ELSE..................................**
/*
const email = prompt("Enter the email address");
const emaillen = email.length;
const dotIndex = email.lastIndexOf(".");
const atIndex = email.lastIndexOf("@");
const lastIndex = emaillen - 1;

if (
  emaillen < 11 ||
  lastIndex - dotIndex < 2 ||
  lastIndex - dotIndex > 3 ||
  dotIndex - atIndex < 3
) {
  console.log("Invalid Email");
}
*/

//SWITCH STATEMENTS................................**
/*
const fruit = prompt("Enter fruit name");
switch (fruit) {
  case "Apple":
    console.log("It's apple");
    break;
  case "KIWI":
    console.log("It's Kiwi");
    break;
  default:
    console.log("Not Known Fruit");
}
*/

// Ternary Operator..............................**
/*
//Condition ? (True) Expression : (False)
let num = 7;
num % 2 === 0 ? console.log("Even") : console.log("ODD");
*/

// FOR loop.......................................**
/*
for (let i = 1; i <= 50; i = i + 2) {
  console.log("Odd Number :" + i);
}
*/

// While loop...................................**
/*
let num = 12345;
while(num !== 0){
    let digit = num % 10;
    num = parseInt(num/10);
    console.log(num);
}
*/

// DO while loop................................**
/*
let num = 65;
do {
  num <= 50;
} while (console.log("number is less than 50"));
*/

// FUNCTIONS.................................**
//call a simple function
/*
function greetuser(username) {
  console.log(`Hello ${username} how are you`);
}
greetuser("bharat");
*/

//DEFAULT Parameters.................................**
/*
function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(5, 5);

function sum(num1 = 0, num2 = 0) {   //set deafult value in parameters in function 
  console.log(num1 + num2);
}
sum(5);
*/

// Return Statements..............................**
/*
function squared(num) {
  return num * num;
}
var result = squared(7);
console.log(result);
*/

// Arrays in JS......................................**
/*
//Define array 1.
const student = ["Alexa", "Google", "Sony"];
console.log(student);

//2.
const car = new Array('Volvo', 'Maruti', 'BMW');
console.log(car);
//3. array conatin multile datatype in one
const arr = ['apple', 'banana', 10, 1.2];
console.log(arr);
*/

//Methods of Arrays................................**

const city = ["Gurgaon", "Sohna", "Kherla", "Damdama", "Badshapur"];
console.log(city.length);
city[2] = "calkata";
console.log(city);
console.log(city.length);

//add elements in array
city.push("Delhi"); //add elements in last index
console.log(city);

city.unshift("kherla"); //add elements in first index
console.log(city);

//remove elements in array
city.pop(); //remove last elements
console.log(city);

city.shift(); //remove first elements
console.log(city);

console.log(city.indexOf("calkata")); //return the position of element
console.log(city.includes("Sohna"));

//Slice .......................** trim the array, create copy of array

console.log(city.slice(2)); //slice the array from index 2 to end
console.log(city.slice(2, 4)); //slice the array from index 2 to 4
console.log(city.slice(-1)); //print last index
