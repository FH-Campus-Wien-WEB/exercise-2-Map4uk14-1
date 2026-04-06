const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies
app.get('/movies', function (req, res) {
  // Task 1.2: Get all movies from the model and convert object to array
  const moviesArray = Object.values(movieModel);
  res.json(moviesArray);
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  // Task 2.1: Get a specific movie by imdbID from the model
  const imdbID = req.params.imdbID;
  const movie = movieModel[imdbID];
  
  // If movie exists, send it; otherwise send 404
  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
})

// Configure a 'PUT' endpoint to save/update a movie
app.put('/movies/:imdbID', function (req, res) {
  // Task 3.1 and 3.2: Save or update a movie
  const imdbID = req.params.imdbID;
  const movieData = req.body;
  
  // Store the movie in the model (this works for both create and update)
  movieModel[imdbID] = movieData;
  
  // Respond with 200 (OK) for successful save
  res.sendStatus(200);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

