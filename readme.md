API Gateway
API Gateway est un point d'entrée pour accéder aux services de films et de séries TV via gRPC. Il expose une API HTTP qui permet de rechercher des films, d'obtenir des détails sur un film spécifique, de rechercher des séries TV et d'obtenir des détails sur une série TV spécifique.

Installation
Clonez ce dépôt sur votre machine locale.
Assurez-vous d'avoir Node.js et NPM installés.
Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances :

npm install
Configuration
Avant de démarrer le serveur API Gateway, assurez-vous que les services de films et de séries TV sont en cours d'exécution aux adresses et ports appropriés. Vérifiez également que les fichiers proto movie.proto et tvShow.proto sont accessibles et correctement configurés.

Démarrage du serveur
Pour démarrer le serveur API Gateway, exécutez la commande suivante :

sql

npm start
Le serveur démarrera et sera accessible à l'adresse http://localhost:3000.

Utilisation de l'API
L'API Gateway expose les endpoints suivants :

GET /movies : Renvoie la liste des films disponibles.
GET /movies/:id : Renvoie les détails d'un film spécifique en fonction de son ID.
GET /tvshows : Renvoie la liste des séries TV disponibles.
GET /tvshows/:id : Renvoie les détails d'une série TV spécifique en fonction de son ID.
Assurez-vous d'utiliser un client HTTP approprié, tel que Thunder Client ou Postman, pour effectuer des requêtes vers ces endpoints.

Contribuer
Les contributions à ce projet sont les bienvenues. Si vous souhaitez apporter des améliorations, des corrections de bugs ou ajouter de nouvelles fonctionnalités, veuillez soumettre une demande d'extraction avec vos modifications.

Licence
Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus d'informations.
