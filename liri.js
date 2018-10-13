//add code to read and set any environment variables with the dotenv package
require("dovenv").config();

//add the code required to import the keys.js file and store it in a variable
let keys = require('./keys.js');

//load NPM packacges
// let inquirer = require("inquirer");
let spotify = require("node-spotify-api");
let request = require("request");
let fs = require("fs");

//you should then be able to access your keys info like so
let spotify = new Spotify(keys.spotify);

let commands = process.argv[2];
let response = process.arrv[3];

}
//MAKE IT SO LIRI.JS CAN TAKE IN ONE OF THE FOLLOWING COMMANDS
// concert-this , spotify-this-song , movie-this , do-what-it-says


function commands(commands, response){
    switch(commands){

        case "spotify-this-song":
        getSong(response);
        break;

        case "movie-this":
        getMovie(response);
        break;
    }

fucntion getSong(response) {


}
// OMDB
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

function (findMovie){

    let findMovie

let queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy";
    console.log(queryURL);

request(queryURL, function(error, response, body){
    if (!error && response.statusCode == 200){
        let parsedData= JSON.parse(body);
        // let display ={
        // "--------------" + "\n" +
        // "Title: " + parsedData.Title + "\n" +
        // "Year: " +parsedData.Year + "\n" +
        // "IMDB: " +parsedData.IMDB
        // }
        console.log("parsedData");

        // "Release Year: " + JSON.parse(body).Year
        // console.log(error);
    } 
    // else{
    //     if(response.statusCode == 200){
    //         console.log(body)
    //     }
    }
});
});




// inquirer.prompt([
//     //create text prompt
//     {
//         //ex: message: "what is your name?",
//         //name: "username"
//     },
//     {
//         //next questions
//     }
// ]).then(response =>{

// })