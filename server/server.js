// Import the required modules: 

const express = require('express');
const cors = require('cors');
const moviesController = require('./controller');

const { getMovies, createMovie, deleteMovie, editMovie } = moviesController;

// Create an instance of the Express application.
const app = express();

// Middleware setup: Parse incoming request bodies as JSON and enable CORS.
app.use(express.json());
app.use(cors());

const port = 4004;
const baseURL = `/api/movies`

// GET response to retrieve all movies.  
app.get(baseURL, getMovies)

// PUT response to update movie ratings.
app.put(`${baseURL}/:identify`, editMovie)

// POST response  to add a new movie.
app.post(baseURL, createMovie)

// DELETE requests 
app.delete(`${baseURL}/:identity`, deleteMovie)

// Start the server and listen on the specified port.
app.listen(port, () => console.log(`The express server is running on port ${port}`))