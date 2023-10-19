const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const Movie = require('./models/movieModels');
const TVShow = require('./models/tvShowModels');

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/movie', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('connexion à MongoDB est établie');
  })
  .catch((error) => {
    console.error('Erreur fatale ! impossible de se connecter a la base de données  :', error);
  });

// API pour ajouter un film
app.post('/movies', (req, res) => {
  const { id, title, description } = req.body;
  const newMovie = new Movie({ id, title, description });

  newMovie.save()
    .then(() => {
      res.status(201).json({ message: 'Film ajouté avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du film :', error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout du film' });
    });
});

// API pour ajouter une émission de télévision
app.post('/tvshows', (req, res) => {
  const { id, title, description } = req.body;
  const newTVShow = new TVShow({ id, title, description });

  newTVShow.save()
    .then(() => {
      res.status(201).json({ message: 'Émission de télévision ajoutée avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout de l\'émission de télévision :', error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'émission de télévision' });
    });
});

const port = 3300;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
