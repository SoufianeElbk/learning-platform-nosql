// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Une route définit les points d'entrée de l'application et associe les requêtes HTTP à des fonctions spécifiques. Un contrôleur, en revanche, contient la logique métier qui est exécutée lorsque ces points d'entrée sont atteints. Les routes dirigent les requêtes vers les contrôleurs appropriés.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Séparer la logique métier des routes permet de maintenir un code propre et organisé. Cela facilite la maintenance, les tests et la réutilisation du code. En isolant la logique métier dans des contrôleurs, on peut également mieux structurer l'application et suivre le principe de séparation des préoccupations.

const { ObjectId } = require('mongodb');
const db = require('../config/db');
const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');

async function createCourse(req, res) {
  // TODO: Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
};