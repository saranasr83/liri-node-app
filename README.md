# liri-node-app

The project was to use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. LIRI is a command line node app that takes in parameters and returns data based on one of four commands:(I used inquirer)

my-tweets

spotify-this-song

movie-this

do-what-it-says

## Getting Started

Clone down repo.

Run command 'npm install' in Terminal or GitBash

Run command 'node liri.js' 

## The info we get from each input

using inquirer you can choose an option from the list:

1- node liri.js my-tweets

Displays my last 20 tweets and when they were created in terminal/bash window.

2- node liri.js spotify-this-song 

Shows the following information about the song in terminal/bash window.

-Artist(s)

-The song's name

-A preview link of the song from Spotify

-The album that the song is from

-Or if no song is passed through, it will default to "The Sign Ace of Base"

3- node liri.js movie-this 

Shows the following information in terminal/bash.

-Title of the movie.

-Year the movie came out.

-IMDB Rating of the movie.

-Country where the movie was produced.

-Language of the movie.

-Plot of the movie.

-Actors in the movie.

-Rotten Tomatoes Rating.

-IMDB Rating.

-Or if no movie is passed through, it will default to "Mr. Nobody"

4- node liri.js do-what-it-says

Takes the text from random.txt and runs the song through spotify-this-song command

## Tech used

Node.js

Twitter NPM Package 

Spotify NPM Package 

Request NPM Package 

Inquirer NPM Package

fs.appendFile

fs.readFile

## Prerequisites

 -Node.js 

 -Download the latest version of Node https://nodejs.org/en/

## Built With

Visual Studio - Text Editor

## Author

Sara Khosravi 