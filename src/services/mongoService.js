// Question: Pourquoi créer des services séparés ?
// Réponse: Créer des services séparés permet de centraliser la logique métier et les interactions avec les bases de données ou autres services externes. Cela rend le code plus modulaire, réutilisable et maintenable. En séparant les services, on peut également faciliter les tests unitaires et l'évolution du code sans impacter les autres parties de l'application.

const { ObjectId } = require('mongodb');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
};