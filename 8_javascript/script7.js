/*****************Day---7*************************/

//JSON   [Javascript Object Notation]..................................**
/*
let jsonobj = {
  name: "bharat",
  lastname: "lal",
  language: "hindi",
  city: "gurgaon",
};

console.log(jsonobj);

let myjsonstr = JSON.stringify(jsonobj);
console.log("myjsonstr : ", myjsonstr); //converting object to string using JSON.stringify() method

myjsonstr = myjsonstr.replace("lal", "Kumar");
console.log(myjsonstr);

newjsonobj = JSON.parse(myjsonstr);   
//.parse() is used to convert JSON into onject 
console.log(newjsonobj);  
*/
/*
let json2obj = {
    name : "john",
    lastname : "Doe",
    company : "Google",
    city : "banglore"
}

console.log(json2obj);

let myjsonstr = JSON.stringify(json2obj);
console.log(myjsonstr);

myjsonstr = myjsonstr.replace("Google", "Microsoft");
console.log(myjsonstr);

newjson2obj = JSON.parse(myjsonstr);
console.log(typeof newjson2obj);
console.log(newjson2obj);
*/

//Deep Copy  & Shallow Copy..............................**
/*
var student1 = {
  name: "Manish",
  company: "google",
};

var student2 = student1;     //This will create a deep copy of variable

student1.name = "Rakesh";

console.log("STudent1 name is :", student1.name);
console.log("STudent2 name is :", student2.name);
*/

//Using spread operator......
/*
var student1 = {
  name: "mansih",
  company: "google",
};

var student2 = { ...student1 };
//By the spread operator if we update something in any student it's not reflect in another student

student1.name = "rakesh";

console.log("Student1 name is :", student1.name);
console.log("Student2 name is :", student2.name);
*/

//Using Json.parse and json.stringify......
/*
var student1 = {
  name: "manish",
  company: "google",
};

var student2 = JSON.parse(JSON.stringify(student1));   
//It's also not reflect any update of student1 to student2 

student1.name = "Rakesh";

console.log("Student1 name is :", student1.name);
console.log("Student2 name is :", student2.name);
*/

//Using Object.assign()..............
/*
var student1 = {
  name: "manish",
  company: "google",
};

var student2 = Object.assign({}, student1);

//These create Shallow copy
//It's create copy but on the one layer on the code.
//If object inside the object it's not copy they passing the refrences

student1.name = "Rakesh";

console.log("Student1 name is :", student1.name);
console.log("Student2 name is :", student2.name);
*/

//DOM Manipulation......................................**
/*
//[Document Object Model]
//To access HTML elements using JavaScript we use Document Object Model (DOM).
//Getting Element by ID
var x = document.getElementById("demo"); //Returns an element with id="demo"
//Getting Element By Class Name
var y = document.getElementsByClassName("demo"); //returns a collection of all elements with class="demo"
//Getting All Elements In The Page
var z = document.body.children; // returns a collection of all child elements in body tag
document.querySelector("#demo");

console.log(document.getElementById("demo"));
*/

//Creating an Elements..................................**

/*
//creating button by javascript in html page
const btn = document.createElement("button");
btn.textContent = "Clcik me";
btn.className = "btn1";

//print btn on html page
const division = document.querySelector("div");
division.appendChild(btn);

const btnfn = document.getElementsByClassName("btn1");
// btnfn.addEventListener("click", buttonfn);
btn.addEventListener("click", buttonfn);

function buttonfn() {
    console.log("Button is clicked");
}

//appply style on the button
btn.style.backgroundColor = "red";
*/

//Remove Elements & Event Listener.............................**

//h1 is removed in html page
document.querySelector("h1").remove();

//Inline Event...............

//Add Event in DOM js file .......................**
/*
const p = document.querySelector("p");
p.addEventListener("click", clickpara);

function clickpara() {
  console.log("para clicked");
}

p.addEventListener("click", function () {
  clickpara("hello");
});

function clickpara(name) {
  console.log(name + "paraclicked");
}
*/

//More on Events:-
/*
    1. mousedown
    2. mouseup
    3. click
    4. mouseover

Keyboard event
    1.keypressed
*/

//Stop Propagation of Event..............**

// event.stopPropagation();
// btn.addEventListener("click", stopPropagation);

//Finding HTML Elements by HTML Object Collections........

/*
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value;
}

document.getElementById("demo").innerHTML = text;
*/
