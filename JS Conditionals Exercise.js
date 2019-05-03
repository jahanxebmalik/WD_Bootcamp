// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue");
} else if (age < 21) {
    console.log("You can enter, but cannot drink");
} else {
    console.log("Come on in, you can drink")
}
// If age is negative
if (age < 0) {
    console.log("Error! you have entered incorrect age!");
}
// If age is 21
if (age === 21) {
    console.log("Happy 21st Birthday!");
}
// If age is odd
//(not evenly divisible by two)
if (age % 2 !== 0) {
    console.log("Your age is odd");
}

// If age is a perfect square
if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}