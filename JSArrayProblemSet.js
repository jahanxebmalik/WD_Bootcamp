// printReverse()
// Write a function printRever() that takes an array as an argument and print out the elements in the array in reverse order (don't actually reverse the array itself)

var reverse = [];

function printReverse(input) {
    for (var i = input.length - 1; i >= 0; i--) {
        reverse.push(input[i]);
    }
    reverse.forEach(function (count) {
        console.log(count);

    });
}

// isUniform ()
// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
// isUniform ([1,1,1,1]);   //True
// isUniform ([2,1,1,1]);   //False
// isUniform (["a","b","p"]);   //False
// isUniform (["b","b","b"]);   //True 


// sumArray()
// Write a function sumArray() that accepts an array of numbers and returns the sume of all numbers in the array
// sumArray([1,2,3]);        //6
// sumArray ([10,3,10,4]);   //27
// sumArray ([-5,100]);      //95


// max()
// Write a function max() that accepts an array of numbers and returns the maximum number in the array
// max([1,2,3]);       //3
// max([10,3,10,4]);   //10
// max([-5,100]);       //100