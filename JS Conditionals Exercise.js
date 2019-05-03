var age = prompt("What is your age?");
if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue");
} else if (age < 21) {
    console.log("You can enter, but cannot drink");
} else {
    console.log("Come on in, you can drink")
}

if (age < 0) {
    console.log("Error! you have entered incorrect age!");
}
if (age == 21) {
    console.log("Happy 21st Birthday!");
}
if (age)