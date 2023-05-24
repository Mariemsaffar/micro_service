// models/movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;