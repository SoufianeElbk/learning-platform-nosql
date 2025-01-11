// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Créer un module séparé pour les connexions aux bases de données permet de centraliser et de réutiliser le code de connexion, de faciliter la gestion des erreurs et des retries, et de maintenir une séparation des préoccupations dans le code. Cela rend le code plus modulaire, maintenable et testable.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : Pour gérer proprement la fermeture des connexions, il est important d'écouter les événements de terminaison de l'application (comme 'SIGINT', 'SIGTERM') et d'appeler les méthodes de fermeture appropriées sur les clients de base de données (par exemple, `mongoClient.close()` pour MongoDB et `redisClient.quit()` pour Redis). Cela garantit que toutes les connexions sont correctement fermées et que les ressources sont libérées.

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  try {
    mongoClient = new MongoClient(config.mongodb.uri);
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  try {
    redisClient = redis.createClient({ url: config.redis.uri });
    redisClient.on('error', (err) => console.error('Redis Client Error', err));
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Failed to connect to Redis:', error);
    throw error;
  }
}

async function closeConnections() {
  if (mongoClient) {
    await mongoClient.close();
    console.log('MongoDB connection closed');
  }
  if (redisClient) {
    await redisClient.quit();
    console.log('Redis connection closed');
  }
}

// Export des fonctions et clients
module.exports = {
  // TODO: Exporter les clients et fonctions utiles
  connectMongo,
  connectRedis,
  getMongoClient: () => mongoClient,
  getRedisClient: () => redisClient,
  getDb: () => db,
  closeConnections
};