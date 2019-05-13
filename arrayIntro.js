// Concatenate
var friends = ["Charlie", "Liz", "David", "Mattias"];
console.log(friends[0] + " <3 " + friends[1]);

// To update data in array
friends[0] = "Chuck";

// To add new data in array
friends[4] = "Amelie";

// We can initialize an empty Array two ways:  
// 1. var friends = [];
// 2. var friends = newArray();

// Array has a length property
var nums = [45, 37, 89, 24];
nums.length //4

// push and pop
var colors = ["red", "orange", "yellow"];
colors.push("purple", "pink", "violet");

var col = colors.pop();

console.log(colors);
console.log(col);