// Select <h1> and save to a variable 
var h1 = document.querySelector("h1");
// Manipulate using <h1> we selected
h1.style.color = "pink";

var body = document.querySelector("body"); //Select
var isBlue = false;

setInterval(function () { //Manipulate
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);


// DOM Selectors

// Methods
// The document comes with a bunch of methods for selecting customElements. We're going to learn about the following 5:
// 1. document.getElementsByID()
// 2. document.getElementsByClassName()
// 3. document.getElementsByTagName()
// 4. document.querySelector()
// 5. document.querySelectorAll()