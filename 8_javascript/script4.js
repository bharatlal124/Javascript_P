/*****************Day---4*************************/

//Higher order function..........................**
//Map function...............................**
/*
const inputs = [1, 2, 3, 4, 5];
const squaredArray = inputs.map((num) => num * num);
console.log(squaredArray);
*/

//Reduce function...............................**

//reduce (redfn, initial value);
//function redfn (accumulator, currectvalue, currectindex, arr);
//It's important to note that these methods work on the original array and doesn't change it, it returns a new array.
/*
const inputs = [2, 3, 4, 5, 6, 7, 8];
const sum = inputs.reduce((total, num, index) => {
  // console.log(total, index);
  return total + num;
}, 1);
console.log("The Sum is ", sum);

const arr = [3, 6, 5, 9, 4, 7, 8];
const sum2 = arr.reduce(function (acc, curr) {
  return acc + curr;
});
console.log(sum2);
*/

//Filter() function.................................**
//filter out and give the copy of new array on a certain condition
/*
const inputs = [4,10,4,-7,-9,-5,4,9];
const positive = inputs.filter(noNegative);
function noNegative(num){
    return num > 0;
}
console.log(positive);          //it's give : 4,10,4,4,9

const negative = inputs.filter((num) =>{
    return num < 0;
})
console.log(negative);             //it's gives : -7,-9,-5
*/

//Find() & FindIndex() function............................**
//find() ......
// it's  return the no. is present  in array
/*
const inputs = [22,13,15,77,65,98,76,44];
const find1 = inputs.find((num) => num == 65);
console.log(find1);

const array = [];
const find3 = inputs.find((num)=>{
    for(let i=0; i<=inputs.length; i++){
        if(num > 50){
            array.push(num);
        }
    }
})
console.log(array);

//findIndex().......
//return the index no. of present no. in array
const find2 = inputs.findIndex((num) => num == 65);
console.log(find2);
*/

//foreach...........................**

//This calls a function for each elements in an array
//it's not execute for empty elements
// Syntax => array.forEach(function(currentvalue, index, arr), thisvalue)
/*
let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(myFunction);

function myFunction(item){
    sum += item;
}
console.log("Summation of all element: " +sum );

const number = [65,44,12,4];
number.forEach(myFunction)
function myFunction(item, index, arr){
    arr[index] = item * 10;
}
console.log(number);
*/

//every() function .............................**
/*
const age = [32, 56, 18, 20];
age.every(checkAge);
function checkAge(age) {
  return age >= 18;
}
// console.log(checkAge);
// checkAge();

const survey = [
  { name: "Steve", answer: "Yes" },
  { name: "Jessica", answer: "Yes" },
  { name: "Peter", answer: "Yes" },
  { name: "Elaine", answer: "Yes" },
];

let result = survey.every(isSameAnswer);

function isSameAnswer(el, index, arr) {
  if (index === 0) {
    return true;
  } else {
    return el.answer === arr[index - 1].answer;
  }
}
console.log(result);  //return true
*/

//LastIndexOf() function.....................**
/*
const fruit =['Apple', 'Orange', 'Mango', 'Apple'];

let  index = fruit.lastIndexOf('Apple');
console.log(index);

let index2 = fruit.lastIndexOf('Mango',-2);
console.log(index2);
*/

// 'This' Keyword...................................**
//It's a pointer to the object
/*
console.log(this);   //it's refer to the window
const person1 = {
    userName : 'John',
    userAge : 25,
    work : function(){
        console.log(this);
    }
}
person1.work();

const person2 = {
    userName : 'Ram',
    userAge : 15,
    
}
person2.work = person1.work;
console.log(person2);
person2.work();

"use strict";
function checkThis(){
    console.log(this);
}
checkThis();

const ArrowCheck =() =>{
    console.log(this);
}
ArrowCheck();


const person3 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person3.fullName());
*/

//Closures.........................**
/*
let counter = 0;
function add() {
  counter += 1;
}
add();
add();
console.log(counter);

function add() {
  let counter = 0;
  counter += 1;
  console.log(counter);    //every time it's give 1 
}
add();
add();
add();
// console.log(counter);
*/

// String Concate............................**
/*
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" "+text2);
console.log(text3); 
*/
