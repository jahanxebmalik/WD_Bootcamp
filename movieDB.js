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

// function film() {
//     for (var i = 0; i < movies.length; i++) {
//         if (movies[0].hasWatched !== true) {
//             console.log("You have not seen " + movies[0].title + " - " + movies[0].rating + " stars");
//         };
//         else {
//             console.log("You have watched " + movies[0].title + " - " + movies[0].rating + " stars");
//         }
//     }

movies.forEach(function (movie) {
    var reuslt = "You have ";
    if (moveBy.hasWatched) {
        result += "watched";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" -";
    result += movie.rating + "stars";
    console.log(result);
})