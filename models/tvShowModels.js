// models/tvShow.js
const mongoose = require('mongoose');

const tvShowSchema = new mongoose.Schema({
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

const TVShow = mongoose.model('TVShow', tvShowSchema);

module.exports = TVShow;