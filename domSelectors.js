var tag = document.getElementById("highlight");

var tags = document.getElementsByClassName("bolded");

var tagName = document.getElementsByTagName("li");
console.log(tagName);

var tagHeading = document.getElementsByTagName("h1");
console.log(tagHeading[0]);

// Returns the first element that matches a given CSS-style selector
var tagQuery = document.querySelector("#highlight");
console.log(tagQuery);