var colors = ["red", "orange", "yellow", "green"];
// ****with forLoop****
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ****with While Loop****
var count = 0;
while (count < colors.length) {
    console.log(colors[count]);
    count++;
}

// ****with forEach****
// forEach() is Same as using a forLoop
colors.forEach(function (printColor) {
    console.log(printColor);
});

// Exercise:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (colors) {
    if (colors % 3 === 0) {
        console.log(colors);
    }
});
// 3, 6, 9