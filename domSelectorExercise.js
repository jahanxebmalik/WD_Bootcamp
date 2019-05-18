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