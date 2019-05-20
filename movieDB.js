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