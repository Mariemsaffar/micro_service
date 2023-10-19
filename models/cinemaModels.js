const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
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

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;