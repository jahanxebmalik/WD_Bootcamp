var movies = [{
        title: "Avengers - EndGame",
        rating: 5,
        hasWatched: true,
    },
    {
        title: "BlackPanther",
        rating: 4,
        hasWatched: true,
    },
    {
        title: "Spiderman - Far From Home",
        rating: 0,
        hasWatched: false,
    },
    {
        title: "Aquaman",
        rating: 4.5,
        hasWatched: true,
    }
]

movies.forEach(function (movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
})


// Adding methods to an Object
var obj = {
    name: "Jahanzeb",
    age: 34,
    isCool: true,
    friends: ["Faizan", "Tuaseen"],
    add: function (x, y) {
        return x + y;
    }
}

console.log(obj.add(10, 5));

// Namespace Collision
// To avoid nameSpace collison, use this pattern by creating an empty object

var dogSpace = {};
dogSpace.speak = function () {
    return "WOOF!";
}

console.log(dogSpace.speak());

var catSpace = {};
catSpace.speak = function () {
    return "MEOW!";
}

console.log(catSpace.speak());

// The Keyword "this"
var comments = {};

comments.data = ["Good job", "Bye", "Lame..."];

comments.print = function print() {
    this.data.forEach(function (el) {
        console.log(el);
    });
}

console.log(comments.print());