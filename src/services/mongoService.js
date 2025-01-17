// Question: Pourquoi créer des services séparés ?
// Réponse: Créer des services séparés permet de centraliser la logique métier et les interactions avec les bases de données ou autres services externes. Cela rend le code plus modulaire, réutilisable et maintenable. En séparant les services, on peut également faciliter les tests unitaires et l'évolution du code sans impacter les autres parties de l'application.

const { ObjectId } = require('mongodb');
const db = require('../config/db');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
  try {
    const objectId = ObjectId.createFromHexString(id);
    const result = await db.getDb().collection(collection).findOne({ _id: objectId });
    return result;
  } catch (error) {
    throw new Error('Failed to find document by ID');
  }
}

async function insertOne(collection, document) {
  try {
    const result = await db.getDb().collection(collection).insertOne(document);
    return result;
  } catch (error) {
    throw new Error('Failed to insert document');
  }
}

async function getCourseStats() {
  try {
    const result = await db.getDb().collection('courses').countDocuments();
    return result;
  } catch (error) {
    throw new Error('Failed to retrieve course stats');
  }
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
  insertOne,
  getCourseStats
};