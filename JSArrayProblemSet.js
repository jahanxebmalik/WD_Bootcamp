// printReverse()
// Write a function printRever() that takes an array as an argument and print out the elements in the array in reverse order (don't actually reverse the array itself)

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([3, 6, 2, 5]);

// isUniform ()
// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
// isUniform ([1,1,1,1]);   //True
// isUniform ([2,1,1,1]);   //False
// isUniform (["a","b","p"]);   //False
// isUniform (["b","b","b"]);   //True 

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false
        }
    }
    return true;
}

// sumArray()
// Write a function sumArray() that accepts an array of numbers and returns the sume of all numbers in the array
// sumArray([1,2,3]);        //6
// sumArray ([10,3,10,4]);   //27
// sumArray ([-5,100]);      //95

function sumArray(arr) {
    var total = 0;
    arr.forEach(function (element) {
        total += element;
    });
    return total;
}

// max()
// Write a function max() that accepts an array of numbers and returns the maximum number in the array
// max([1,2,3]);       //3
// max([10,3,10,4]);   //10
// max([-5,100]);       //100

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}