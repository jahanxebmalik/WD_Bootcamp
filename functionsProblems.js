// Write a function isEven which takes a single numeric argument and returns true if the number is event, and false otherwise
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else return false;
}

isEven(4); //true
// Write a function () which takes a single numeric argument and returns the factorial of that number
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

factorial(5); //120
factorial(2); //2
factorial(10); //3628800
factorial(0); //1