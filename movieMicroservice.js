// movieMicroservice.js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// Charger le fichier movie.proto
const movieProtoPath = 'movie.proto';
const movieProtoDefinition = protoLoader.loadSync(movieProtoPath, {
keepCase: true,
longs: String,
enums: String,
defaults: true,
oneofs: true,
});
const movieProto = grpc.loadPackageDefinition(movieProtoDefinition).movie;
// Implémenter le service movie
const movieService = {
getMovie: (call, callback) => {
// Récupérer les détails du film à partir de la base de données
const movie = {
id: call.request.movie_id,
title: 'Exemple de film',
description: 'description du film',
// Ajouter d'autres champs de données pour le film au besoin
};
callback(null, { movie });
},
searchMovies: (call, callback) => {
const { query } = call.request;
// Effectuer une recherche de films en fonction de la requête
const movies = [
{
id: '1',
title: 'Titanic',
description: 'un film dramatique et romantique sorti en 1997 et réalisé par James Cameron.',
},
{
id: '2',
title: 'The Shawshank Redemption',
description: 'L histoire se déroule dans la prison d État de Shawshank',
},
// Ajouter d'autres résultats de recherche de films au besoin
];
callback(null, { movies });
},
// Ajouter d'autres méthodes au besoin
};
// Créer et démarrer le serveur gRPC
const server = new grpc.Server();
server.addService(movieProto.MovieService.service, movieService);
const port = 50051;
server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(),
(err, port) => {
if (err) {
console.error('Échec de la liaison du serveur:', err);
return;
}
console.log(`Le serveur s'exécute sur le port ${port}`);
server.start();
});
console.log(`Microservice de films en cours d'exécution sur le port ${port}`);