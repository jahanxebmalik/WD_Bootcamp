// Exercise 1

var someObject = {};

// Which of the following are valid:
someObject._name = "Hedwig"; //valid
someObject.age = 6; //valid

var prop = "color"

someObject[prop] = "red"; //valid
// someObject.123 = true; //invalid

// Exercie 2
var someObject = {
    frineds: [{
            name: "Malfoy"
        },
        {
            name: "Crabbe"
        },
        {
            name: "Goyle"
        }
    ],
    color: "baby blue",
    isEvil: true
};

// Write code to retrieve "Malfoy" from someObject 
someObject.friends[0].name
// Go one "layer" at a time!