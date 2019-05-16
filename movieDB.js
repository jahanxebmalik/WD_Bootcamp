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