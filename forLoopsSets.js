console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
for (var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
for (var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
for (i = 300; i < 334; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("PRINT ALL NUMBERS DIVISBLE BY 5 AND 3 BETWEEN 5 AND 50");
for (i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}