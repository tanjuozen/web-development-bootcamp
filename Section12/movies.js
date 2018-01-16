var movie1 = {
    name: "In Bruges",
    star: 5,
    hasWatched: true
}; 

var movie2 = {
    name: "Frozen",
    star: 4.5,
    hasWatched: false
}; 

var movie3 = {
    name: "Mad Max Fury Road",
    star: 5,
    hasWatched: true
}; 

var movie4 = {
    name: "Les Miserables",
    star: 3.5,
    hasWatched: false
}; 

var movies = [movie1, movie2, movie3, movie4];

movies.forEach(function(movie) {
    console.log(buildString(movie));
    
    /* if (movie.hasWatched) {
       console.log("You have watched \""  + movie.name + "\" - " + movie.star + " stars");
   } else {
    console.log("You have not seen \""  + movie.name + "\" - " + movie.star + " stars");
   } */
});

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.name + "\" - " + movie.star + " stars";
    return result;
};