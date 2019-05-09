//PRINT ALL NUMBERS BETWEEN -10 AND 19
//PRINT ALLEVEN NUMBERS BETWEEN 10 AND 40
//PRINT ALL ODD NUMBERS BETWEEN 300 AND 333
//PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50

console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
var count = -10;
while (count < 20) {
    console.log(count);
    count++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
var even = 10;
while (even <= 40) {
    if (even % 2 === 0) {
        console.log(even);
    }
    even += 1;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
var odd = 300;
while (odd < 334) {
    if (odd % 2 !== 0) {
        console.log(odd);
    }
    odd += 1;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var counter = 5;
while (counter <= 50) {
    if (counter / 3) {
        console.log(counter);
    }
    counter += 1;
}