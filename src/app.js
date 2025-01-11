// Question: Comment organiser le point d'entrée de l'application ?
// Réponse: Le point d'entrée de l'application doit être organisé de manière à initialiser les configurations nécessaires, établir les connexions aux bases de données, configurer les middlewares, monter les routes et démarrer le serveur. Cela permet de s'assurer que toutes les dépendances et configurations sont en place avant que l'application ne commence à traiter les requêtes.

// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
// Réponse: La meilleure façon de gérer le démarrage de l'application est d'utiliser une fonction asynchrone pour initialiser les connexions aux bases de données, configurer les middlewares et monter les routes. En cas d'erreur, il est important de gérer les exceptions et de fournir des messages d'erreur clairs. Une fois toutes les configurations terminées, le serveur peut être démarré.

const express = require('express');
const config = require('./config/env');
const db = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    // TODO: Configurer les middlewares Express
    // TODO: Monter les routes
    // TODO: Démarrer le serveur
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
});

startServer();