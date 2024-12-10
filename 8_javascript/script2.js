/*****************Day---2*************************/
//Splice.............................** Remove elements in array and then add elements

const city = ["Gurgaon", "Sohna", "Kherla", "Damdama", "Badshapur"];
// city.splice(2, 1, "Colkata");
// console.log(city);

// city.splice(3, 0, "Kherla");
// console.log(city);

//Concat........................**

const fruit = ["apple", "mango", "grapes", "banana"];
/*
const mergearray = city.concat(fruit);
console.log(mergearray);
*/

// Loops over array...........................**
/*
for (let i = 0; i < fruit.length; i++) {
  console.log(`Fruit no ${i + 1} : ${fruit[i]}`);
}

for (let i = 0; i < city.length; i++) {
  if (city[i] == "Gurgaon") {
    console.log(`${city[i]} is Developed City`);
  } else if (city[i] == "kherla") {
    console.log(`${city[i]} is village`);
  } else {
    console.log("Other city");
  }
}
*/

// for in,   for of  loop............................**
/*
for (let i in city) {
  //here i behave like String :)
  console.log(`City Name: ${city[i]}, Index: ${i}`);
}

for (let cit of city) {
  //here cit print all city array
  console.log(`City Name: ${cit}`);
}
*/

//Break vs Continue.........................**

const inputs = [5, 4, 3, 2, 1, 6, 7, 8, 9];
/*
for (let i in inputs) {
  if (i % 2 !== 0) {
    console.log(i);
    continue;
  }
}

const evenNumber = [];
for (let i in inputs) {
  if (i % 2 !== 0) {
    continue;
  }

  evenNumber.push(i);

  if (evenNumber.length === 5) {
    break;
  }
  console.log(evenNumber); //here this console not print all even no. because of break
}
console.log(evenNumber); // here this print all even no. in one array
*/

//Rest Vs Spread Operator.............................**
/*
function addcity(fruit, fruitname) {
  fruit.push(fruitname);
  console.log(fruit);
}
addcity(fruit, "kiwi");
addcity(fruit, "orange");
addcity(fruit, "pineapple"); //here we want to call function again and again to add multiple fruit in array

//Rest operator......
function addfruit(fruitname, ...fruit) {
  for (let i of fruit) {
    fruitname.push(i);
  }
  console.log(fruitname);
}

addfruit(fruit, "watermellon", "mellon", "maxmelon"); // here we have to add multiple fruit in one line in one call of function
*/

//Spread Operator........... //Expand or Copy
/*
const newarray = [...fruit];   //create shadow copy
console.log(newarray);
fruit.push("watermelon","kiwi","plum");
console.log(fruit);
console.log(newarray);    //this print only copy array not the updated array

// Concatenate...................
const mergedarray = [...fruit, ...city];
console.log(mergedarray);
*/

// Object in JS..................................**
/*
//we have to create object without defne class
const person1 = {
    name : "john",   //key  : value
    age : 10,
    sex : "male",
    hobby : "dancing",
    100 : "hundred",

    show : function(){   //this type of called anonymous function
        console.log(`My Name is ${this.name}`);
    }
}
console.log(person1);
//access any key from object
console.log(person1.name);  //name
console.log(person1["name"]);  //name
console.log(person1[100]);    //hundred
person1.show();   // function call 
*/

// Strict Mode....................................**
/*
//we have to used manually in code
"use strict";
a = 10;
console.log(a);      //error

let value = 10;
if(value){
    value =20;
}
console.log(value);     //error
*/

// Let or Var variable.........................**
/*
var a =10;
console.log(a);
var a =55;
console.log(a);

let c = 20;
console.log(c);        //here this show error 
let c = 40;
console.log(c);      //let varible can't update 
*/

// Start function in next day
// Keep coding :)
