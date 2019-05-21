// Come up with 4 different ways to select the first <p> tag
// First method
var first = document.getElementById("first");
console.log(first);

// Second method
var second = document.getElementsByClassName("special");
console.log(second[0]);

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