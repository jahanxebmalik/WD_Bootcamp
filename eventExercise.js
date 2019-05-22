// Exercise 1
// Change color of background after clicking on button

var button = document.querySelector("button");
// var body = document.querySelector("body");
// var isGreen = false;
// -------------------------------------------------------
// button.addEventListener("click", changeColor);

// function changeColor() {
//     body.style.background = "purple";
// }
// --------------------------------------------------------
// Another way
// button.addEventListener("click", function () {
//     if (isGreen) {
//         body.style.background = "white";
//     } else {
//         body.style.background = "green";
//     }
//     isGreen = !isGreen;
// })

// ---------------------------------------------------------
// Colt's way of toggling between bg color

// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function () {
//     if (isPurple) {
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
//     //better way of is // isGreen = !isGreen;
// })

// Shorter way of doing it
// Add a CSS class:

// isPurple {
//     background: isPurple;
// }
// ---------------------------------------------------------
button.addEventListener("click", function () {
    document.body.classList.toggle("purple");
})