// Write a function isEven which takes a single numeric argument and returns true if the number is event, and false otherwise
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// OR

function isEven(num) {
    return num % 2 === 0;
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

console.log(factorial(10));

factorial(5); //120
factorial(2); //2
factorial(10); //3628800
factorial(0); //1

// Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
// Basically, replace "-"s with "_"s

function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;
    //try with: "this - is -a - ---test";
}

kebabToSnake("hello-wrold"); //"hello_world"
kebabToSnake("dogs-are-awesome"); //"dogs_are_awesome"
kebabToSnake("blah"); //"blah"