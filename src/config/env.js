// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : Pour s'assurer que toutes les configurations nécessaires sont présentes et correctes avant que l'application ne commence à fonctionner. Cela permet d'éviter des erreurs inattendues en cours d'exécution et de garantir que l'application dispose de toutes les informations nécessaires pour se connecter aux services externes, comme les bases de données.
// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse : L'application doit lever une erreur explicative et arrêter son exécution. Cela permet de signaler immédiatement le problème de configuration et d'éviter des comportements imprévisibles ou des échecs plus difficiles à diagnostiquer plus tard.

const dotenv = require('dotenv');
dotenv.config();

const requiredEnvVars = [
  'MONGODB_URI',
  'MONGODB_DB_NAME',
  'REDIS_URI'
];

// Validation des variables d'environnement
function validateEnv() {
  // TODO: Implémenter la validation
  // Si une variable manque, lever une erreur explicative
}

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME
  },
  redis: {
    uri: process.env.REDIS_URI
  },
  port: process.env.PORT || 3000
};