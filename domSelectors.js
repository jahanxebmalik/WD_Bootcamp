// Changing background color after every second
// var body = document.querySelector("body");
// var isBlue = false;

// setInterval (function (){
//     if (isBlue) {
//         body.style.background = "white";
//     } else {
//         body.style.background ="#3498db";
//     }
//     isBlue = !isBlue;
// } ,1000);



var tag = document.getElementById("highlight");

var tags = document.getElementsByClassName("bolded");

var tagName = document.getElementsByTagName("li");
console.log(tagName);

var tagHeading = document.getElementsByTagName("h1");
console.log(tagHeading[0]);

// Returns the first element that matches a given CSS-style selector
var tagQuery = document.querySelector("#highlight");
console.log(tagQuery);

var tagClass = document.querySelector(".bolded");
console.log(tagClass);

var tagAll = document.querySelectorAll(".bolded");
console.log(tagAll);