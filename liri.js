require("dotenv").config();

//import from keys.js
var keys = require("./keys.js")

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
// fs is a core Node package for reading and writing files
var fs = require("fs");

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

// console.log("client:", client)
// console.log("spotify:", spotify)
var nodeArgs = process.argv
var command = process.argv[2]

// if the input was more than one word

var userInput = "";

for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2) {
        userInput = userInput + " " + nodeArgs[i]
    } else {
        userInput += nodeArgs[i]
    }
}


function myTweets() {

}

//spotify-this-song
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

function spotifySong() {
    spotify.search({ type: 'track', query: "All The Small Things" }, function (err, data) {
        if (!err) {
            // console.log("displaying artist",data.artists)
            // console.log("query:\n", JSON.stringify(data, null, 2));
            console.log("Artist(s): ", data.tracks.items[0].album.artists[0].name)
            console.log("Song's Name: ", data.tracks.items[0].name);
            console.log("The preview link: ", data.tracks.items[0].preview_url);
            console.log("Album name: ", data.tracks.items[0].album.name);

        } else {
            return console.log('Error occurred: ' + err);
        }

    });
}
spotifySong();
//movie-this
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

function movie() {
    if (userInput === "") {
        userInput = "Mr. Nobody"
    }
    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";


    // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Released);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
         } 
        
        //adds text to log.txt
        fs.appendFile('log.txt', "\nTitle: " + JSON.parse(body).Title + "\n");
        fs.appendFile('log.txt', "Release Year: " + JSON.parse(body).Released + "\n");
        fs.appendFile('log.txt', "IMdB Rating: " + JSON.parse(body).imdbRating + "\n");
        fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n");
        fs.appendFile('log.txt', "Country: " + JSON.parse(body).Country + "\n");
        fs.appendFile('log.txt', "Language: " + JSON.parse(body).Language + "\n");
        fs.appendFile('log.txt', "Plot: " + JSON.parse(body).Plot + "\n");
        fs.appendFile('log.txt', "Actors: " + JSON.parse(body).Actors + "\n");

    });
}
// movie();

//do-what-it-says
function random() {
    // This block of code will read from the "random.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);
    })

}

