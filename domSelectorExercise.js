// Come up with 4 different ways to select the first <p> tag
// First method
var first = document.getElementById("first");
console.log(first);

// Second method
var second = document.getElementsByClassName("special")[0];
console.log(second);

// Third method
var third = document.getElementsByTagName("p");
console.log(third[0]);

// Fourth method
var fourth = document.querySelector("#first");
console.log(fourth);

// Fifth Method
var fifth = document.querySelector("p");
console.log(fifth);

// Sixth Method
var sixth = document.querySelectorAll("p")[0];
console.log(sixth);

// Seventh Method
var seventh = document.querySelector(".special");
console.log(seventh);

// Eighth Method
var eighth = document.querySelector("h1 + p");
console.log(eighth);